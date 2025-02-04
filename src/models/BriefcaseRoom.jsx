// BriefcaseRoom.jsx
import { useEffect, useRef, useState } from "react";
import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three'; // Import THREE
import briefcaseModel from '../assets3/3d/briefcase.glb'; // Import the briefcase model

const BriefcaseRoom = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const briefcaseRef = useRef();
  const { gl, viewport, camera } = useThree(); // Access the camera

  const { nodes, materials } = useGLTF(briefcaseModel); // Load the briefcase model

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 2;

  // State to track zoom
  const [isZoomed, setIsZoomed] = useState(false);

  // Adjusting the camera to zoom in
  useEffect(() => {
    if (isZoomed) {
      camera.position.set(0, 0, 10); // Zoom in to the briefcase
    } else {
      camera.position.set(2, 1, 70); // Default position
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

    // Make the briefcase spin continuously
    if (briefcaseRef.current) {
      briefcaseRef.current.rotation.y += 0.01; // Adjust the speed of rotation here
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
      briefcaseRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  // Handling keydown events for rotation with arrow keys
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      briefcaseRef.current.rotation.y -= 0.035 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      briefcaseRef.current.rotation.y += 0.035 * Math.PI;
      rotationSpeed.current = -0.007;
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
      briefcaseRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
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
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
    <a.group ref={briefcaseRef} {...props} onClick={handleClick}  position={[50, -3, 0]} >
      <group>
        {/* Render 3D briefcase model */}
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Team3_Sanchez_Briefcase_Team3_Sanchez_BriefcaseLocks_0.geometry}
        material={materials.Team3_Sanchez_BriefcaseLocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Team3_Sanchez_Briefcase_Team3_Sanchez_BriefcaseLeather_0.geometry}
        material={materials.Team3_Sanchez_BriefcaseLeather}
        />
      </group>
    </a.group>
  );
};

export default BriefcaseRoom;
