import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Room from "../models/Room";
import Sky from "../models/Sky";
import Cat from "../models/Cat";
import HomeInfo from "../components/HomeInfo";
import * as THREE from "three";
import Camera from "../components/Camera";
import { useEffect } from "react";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // detect screen size to change location of clickable areas
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // to make room look nice on all devices
  const adjustRoomForScreen = () => {
    let screenScale, screenPosition;
    let screenRotation = [0.2, -50, -0.05];

    if (window.innerWidth <= 1024) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0.9, -3, 2];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [2.5, -4, 2.6];
    }

    return [screenScale, screenPosition, screenRotation];
  };
  const [roomScale, roomPosition, roomRotation] = adjustRoomForScreen();

  const adjustCatForScreen = () => {
    let catScale, catRotation, catPosition;

    if (window.innerWidth <= 1024) {
      catScale = [0.8, 0.8, 0.8];
      switch (currentStage) {
        case 1:
          catPosition = new THREE.Vector3(-3.3, -2.2, 3.3);
          catRotation = [0, 0.5, 0];
          break;
        case 2:
          catPosition = new THREE.Vector3(-1, -1.6, 1.4);
          catRotation = [0, 3.5, 0];
          break;
        case 3:
          catPosition = new THREE.Vector3(3, -1.7, -1);
          catRotation = [0, 4, 0];
          break;
        case 4:
          catPosition = new THREE.Vector3(4.4, -1.9, 2.2);
          catRotation = [0, 5.5, 0];
          break;
      }
    } else {
      catScale = [1, 1, 1];
      switch (currentStage) {
        case 1:
          catPosition = new THREE.Vector3(-4.3, -2.8, 3.3);
          catRotation = [0, 0.8, 0];
          break;
        case 2:
          catPosition = new THREE.Vector3(0.1, -2, 2);
          catRotation = [0, 3.5, 0];
          break;
        case 3:
          catPosition = new THREE.Vector3(5.3, -2.1, -1);
          catRotation = [0, 4, 0];
          break;
        case 4:
          catPosition = new THREE.Vector3(7, -2.5, 2.8);
          catRotation = [0, 5.2, 0];
          break;
      }
    }

    return [catScale, catRotation, catPosition];
  };

  const [catScale, catRotation, catPosition] = adjustCatForScreen();

  const bubblePositions =
    window.innerWidth <= 1024
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

  return (
    <section className="w-full h-screen relative">
      <div className="absolute bottom-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[5]">
        {bubblePositions.map((pos, index) => (
          <div
            key={index}
            className="absolute lg:w-8 lg:h-8 w-6 h-6 bg-yellow-700 opacity-60 rounded-full animate-bounce"
            style={{
              top: `${pos.y}px`,
              left: `${pos.x}px`,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>
      <Canvas
        className={`w-full h-screen ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        } bg-transparent`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <Camera />
          <directionalLight position={[-100, 21, 5]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor={"#b1e1ff"}
            groundColor={"#000000"}
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Room
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={roomPosition}
            scale={roomScale}
            rotation={roomRotation}
          />
          <Cat
            scale={catScale}
            rotation={catRotation}
            isRotating={isRotating}
            position={catPosition}
            setCurrentStage={setCurrentStage}
            currentStage={currentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
