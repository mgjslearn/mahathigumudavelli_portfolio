import React, { useRef, useEffect, useState } from "react";
import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three'; // Import THREE
import OfficePhoneModel from '../assets3/3d/office_phone.glb'; // New model path

const OfficePhoneRoom = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const phoneRef = useRef();
  const { gl, viewport, camera } = useThree(); // Access the camera

  const { nodes, materials } = useGLTF(OfficePhoneModel); // Load the office phone model

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95; // Adjust damping factor for smooth deceleration

  const [isZoomed, setIsZoomed] = useState(false); // State for zoom

  // Adjusting the camera to zoom in
  useEffect(() => {
    if (isZoomed) {
      camera.position.set(0, 5, 15); // Zoomed-in position
    } else {
      camera.position.set(-50, 10, 50); // Default position
    }
    camera.updateProjectionMatrix();
  }, [isZoomed, camera]);

  // Animate the zoom effect smoothly
  useFrame(() => {
    if (isZoomed) {
      camera.position.lerp(new THREE.Vector3(0, 0, 10), 0.1); // Smooth transition to zoom-in
    } else {
      camera.position.lerp(new THREE.Vector3(2, 1, 70), 0.1); // Smooth transition to zoom-out
    }

    // Apply damping to the rotation speed and rotate the phone
    if (phoneRef.current) {
      phoneRef.current.rotation.y += rotationSpeed.current; // Apply rotation
      rotationSpeed.current *= dampingFactor; // Apply damping to gradually slow down
    }
  });

  // Handling pointer (mouse/touch) events for rotation
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / window.innerWidth; // Use window width instead of viewport
      rotationSpeed.current = delta * 0.05 * Math.PI; // Increased sensitivity
      lastX.current = clientX;
    }
  };

  // Handling keydown events for rotation with arrow keys
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      rotationSpeed.current = 0.05; // Set rotation speed for left key
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      rotationSpeed.current = -0.05; // Set rotation speed for right key
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / window.innerWidth; // Use window width instead of viewport
      rotationSpeed.current = delta * 0.05 * Math.PI; // Increased sensitivity
      lastX.current = clientX;
    }
  };

  // Handling click event to zoom in
  const handleClick = () => {
    setIsZoomed(true); // Trigger zoom-in
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl]);

  return (
    <a.group ref={phoneRef} {...props} onClick={handleClick}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.phone_a_0.geometry}
          material={materials.phone_a}
          position={[-50, 0, -0.3]} // Keep position fixed
        />
      </group>
    </a.group>
  );
};

export default OfficePhoneRoom;
