import { useEffect, useState } from "react";
import * as THREE from "three";

const useAdjustments = (currentStage) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Room adjustments
  const adjustRoomForScreen = () => {
    let screenScale, screenPosition;
    let screenRotation = [0.2, -50, -0.05];

    if (screenWidth <= 1024) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0.9, -3, 2];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [2.5, -4, 2.6];
    }

    return [screenScale, screenPosition, screenRotation];
  };
  
  const [roomScale, roomPosition, roomRotation] = adjustRoomForScreen();

  // Cat adjustments
  const adjustCatForScreen = () => {
    let catScale = screenWidth <= 1024 ? [0.8, 0.8, 0.8] : [1, 1, 1];
    let catRotation, catPosition;

    const positions = {
      1: { pos: [-4.3, -2.8, 3.3], rot: [0, 0.8, 0] },
      2: { pos: [0.1, -2, 2], rot: [0, 3.5, 0] },
      3: { pos: [5.3, -2.1, -1], rot: [0, 4, 0] },
      4: { pos: [7, -2.5, 2.8], rot: [0, 5.2, 0] },
    };

    if (screenWidth <= 1024) {
      positions[1].pos = [-3.3, -2.2, 3.3];
      positions[1].rot = [0, 0.5, 0];

      positions[2].pos = [-1, -1.6, 1.4];
      positions[2].rot = [0, 3.5, 0];

      positions[3].pos = [3, -1.7, -1];
      positions[3].rot = [0, 4, 0];

      positions[4].pos = [4.4, -1.9, 2.2];
      positions[4].rot = [0, 5.5, 0];
    }

    catPosition = new THREE.Vector3(...positions[currentStage].pos);
    catRotation = positions[currentStage].rot;

    return [catScale, catRotation, catPosition];
  };

  const [catScale, catRotation, catPosition] = adjustCatForScreen();

  // Bubble positions
  const bubblePositions = screenWidth <= 1024
    ? [
        { x: screenWidth * 0.05, y: screenHeight * -0.69 },
        { x: screenWidth * 0.32, y: screenHeight * -0.61 },
        { x: screenWidth * 0.67, y: screenHeight * -0.67 },
        { x: screenWidth * 0.9, y: screenHeight * -0.55 },
      ]
    : [
        { x: screenWidth * 0.35, y: screenHeight * -0.79 },
        { x: screenWidth * 0.475, y: screenHeight * -0.645 },
        { x: screenWidth * 0.62, y: screenHeight * -0.75 },
        { x: screenWidth * 0.84, y: screenHeight * -0.45 },
      ];

  return {
    roomScale,
    roomPosition,
    roomRotation,
    catScale,
    catRotation,
    catPosition,
    bubblePositions,
  };
};

export default useAdjustments;
