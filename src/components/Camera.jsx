// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";

// const Camera = () => {
//   const { camera } = useThree(); // Access the camera object

//   useFrame(() => {
//     if (window.innerWidth < 960) {
//       camera.position.set(0, 2, 12);
//     } else {
//       camera.position.set(2, 3, 10);
//       camera.lookAt(new THREE.Vector3(0, 0, 0)); // Look at the center of the room
//     }
//   });

//   return null;
// };

// export default Camera;

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Camera = () => {
  const { camera } = useThree();

  useFrame(() => {
    const width = window.innerWidth;

    if (width < 480) {
      camera.position.set(0, 2, 14);
    } else if (width < 768) {
      camera.position.set(1, 2.5, 13);
    } else if (width < 1024) {
      camera.position.set(1.5, 3, 11);
    } else if (width < 1440) {
      camera.position.set(2, 3, 10);
    } else {
      camera.position.set(3, 4, 9);
    }

    camera.lookAt(new THREE.Vector3(0, 0, 0));
  });

  return null;
};

export default Camera;
