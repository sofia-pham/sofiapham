import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import catScene from "../assets/3D models/cat.glb";

const Cat = ({ isRotating, ...props }) => {
  const catRef = useRef();
  const { scene, animations } = useGLTF(catScene);
  const { actions } = useAnimations(animations, catRef);

  useEffect(() => {
    if (isRotating) {
      actions["typing"]?.fadeOut(0.5);
      actions["walking1"]?.reset().fadeIn(0.5).play();
    } else {
      actions["walking1"]?.fadeOut(0.5);
      actions["typing"]?.reset().fadeIn(0.5).play();
    }
  }, [actions, isRotating]);

  return (
    <mesh ref={catRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Cat;
