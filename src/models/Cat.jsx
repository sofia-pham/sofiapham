import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import catScene from "../assets/3D models/cat.glb";

const Cat = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(catScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    // if (isRotating) {
    //   actions["walking"].play();
    // } else {
    //   actions["walking"].stop();
    // }
  }, [actions, isRotating]);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Cat;
