import { useGLTF } from "@react-three/drei";
import React from "react";

import skyScene from "../assets/3D models/sky.glb";

const Sky = ({ isRotating, ...props }) => {
  const sky = useGLTF(skyScene);
  return (
    <mesh>
      <primitive object={sky.scene}></primitive>
      {/*primative is a wrapper for the object*/}
    </mesh>
  );
};

export default Sky;
