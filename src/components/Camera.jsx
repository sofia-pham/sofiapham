import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Camera = () => {
  const { camera } = useThree();

  useFrame(() => {
    const width = window.innerWidth;
    if (width < 480) {
      camera.position.set(2, 4, 15);
    } else if (width < 768) {
      camera.position.set(2, 4, 14);
    } else if (width < 1024) {
      camera.position.set(1.5, 4, 12);
    } else if (width < 1440) {
      camera.position.set(2, 4, 11);
    } else {
      camera.position.set(3, 4, 10);
    }

    camera.lookAt(new THREE.Vector3(0, 0, 0));
  });

  return null;
};

export default Camera;
