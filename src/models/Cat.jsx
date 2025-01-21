import React from "react";
import { useGLTF } from "@react-three/drei";

import catScene from "../assets/3D models/cat.glb";

const Cat = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(catScene);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Cat;
