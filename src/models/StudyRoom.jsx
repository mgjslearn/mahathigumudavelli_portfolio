import { useEffect, useRef, useState } from "react";
import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three'; // Import THREE
import myComputerModel from '../assets3/3d/my_computer.glb'; // New model path
import studyScene from '../assets3/3d/study_room.glb'

const MyComputerRoom = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const studyRef = useRef();
  const { gl, viewport, camera } = useThree(); // Access the camera

  const { nodes, materials } = useGLTF(myComputerModel); // Load the new model

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 2;

  // State to track zoom
  const [isZoomed, setIsZoomed] = useState(false);

  // Adjusting the camera to zoom in
  useEffect(() => {
    if (isZoomed) {
      camera.position.set(0, 1000, 100); // Zoom in to the computer
    } else {
      camera.position.set(2, 2, 0); // Default position
    }

    // Ensure the camera matrix is updated after changing position
    camera.updateProjectionMatrix();
  }, [isZoomed, camera]);

  // Animate the zoom effect smoothly
  useFrame(() => {
    if (isZoomed) {
      camera.position.lerp(new THREE.Vector3(0, 0, 10), 0.1); // Smooth transition to zoom-in
    } else {
      camera.position.lerp(new THREE.Vector3(2, 1, 70), 0.1); // Smooth transition to zoom-out
    }

    // Make the computer spin continuously
    if (studyRef.current) {
      studyRef.current.rotation.y += 0.01; // Adjust the speed of rotation here
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
      const delta = (clientX - lastX.current) / viewport.width;
      studyRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      studyRef.current.rotation.y -= 0.035 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      studyRef.current.rotation.y += 0.035 * Math.PI;
      rotationSpeed.current = -0.007;
    }
    if (event.key === " ") { // Spacebar key press
      setIsZoomed(true); // Always zoom in, no toggle
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
      const delta = (clientX - lastX.current) / viewport.width;
      studyRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
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
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
    <a.group ref={studyRef} {...props}>
      <group>
        {/* Render 3D model */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.palette}
          rotation={[-Math.PI / 2, 0, 0]} // Adjust the rotation if needed
        />
      </group>
    </a.group>
  );
};

export default MyComputerRoom;
