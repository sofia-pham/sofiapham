import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import catScene from "../assets/3D models/cat.glb";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Cat = ({ isRotating, targetPosition, ...props }) => {
  const catRef = useRef();
  const { scene, animations } = useGLTF(catScene);
  const { actions } = useAnimations(animations, catRef);
  const { camera } = useThree();

  useEffect(() => {
    if (isRotating) {
      actions["typing"]?.fadeOut(0.5);
      actions["walking1"]?.reset().fadeIn(0.5).play();
    } else {
      actions["walking1"]?.fadeOut(0.5);
      actions["typing"]?.reset().fadeIn(0.5).play();
    }
  }, [actions, isRotating, targetPosition]);

  useFrame(() => {
    if (!catRef.current) return;

    // Move Cat Smoothly to Target Position
    catRef.current.position.lerp(targetPosition, 0.05);

    // Update Camera to Follow Cat with an Offset
    const offset = new THREE.Vector3(0, 1, 4); // Keep camera above & behind
    const targetCameraPosition = catRef.current.position.clone().add(offset);
    camera.position.lerp(targetCameraPosition, 0.1);

    const lookAtPosition = catRef.current.position.clone();
    lookAtPosition.y += 1;
    camera.lookAt(lookAtPosition);
  });

  return (
    <mesh ref={catRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Cat;
