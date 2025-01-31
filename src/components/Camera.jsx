import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Camera = ({ catRef }) => {
  const cameraRef = useRef();

  useFrame(({ camera }) => {
    if (catRef.current) {
      const catPos = catRef.current.position.clone();
      const offset = new THREE.Vector3(0, 2, 4); // Adjust offset to position camera
      camera.position.lerp(catPos.add(offset), 0.1);
      camera.lookAt(catRef.current.position);
    }
  });

  return null; // This component doesn't render anything, only updates the camera
};

export default Camera;
