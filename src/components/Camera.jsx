import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Camera = ({ catRef }) => {
  useFrame((state) => {
    const camera = state.camera;
    const offset = new THREE.Vector3(0, 5, 10); // Camera offset
    const targetPosition = catRef.current.clone().add(offset); // Target position for the camera

    // Smoothly interpolate the camera's position towards the target
    camera.position.lerp(targetPosition, 0.05);
    camera.lookAt(catRef.current); // Ensure the camera looks at the cat
  });

  return null; // This component does not render anything
};

export default Camera;
