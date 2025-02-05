import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Room from "../models/Room";
import Sky from "../models/Sky";
import Cat from "../models/Cat";
import { ContactShadows } from "@react-three/drei";
import HomeInfo from "../components/HomeInfo";
import * as THREE from "three";
import Camera from "../components/Camera";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [catPosition, setCatPosition] = useState(new THREE.Vector3(0, -1.5, 2));

  // to make room look nice on all devices
  const adjustRoomForScreen = () => {
    let screenScale, screenPosition;
    let rotation = [0.2, -50, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [2.5, -3, 2];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [2.5, -4, 2.6];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [roomScale, roomPosition, roomRotation] = adjustRoomForScreen();

  const stagePositions = {
    1: new THREE.Vector3(0, -1.5, 2),
    2: new THREE.Vector3(1, -1.5, 2.8),
    3: new THREE.Vector3(-1.5, -1.5, 1),
    4: new THREE.Vector3(-2, -1.5, -2),
  };

  const adjustCatForScreen = () => {
    let catScale = [1, 1, 1];
    let catRotation;

    if (currentStage === 1) {
      catRotation = [0, 3.7, 0];
    } else if (currentStage === 2) {
      catRotation = [0, 3.7, 0];
    } else if (currentStage === 3) {
      catRotation = [0, -1.2, 0];
    } else if (currentStage === 4) {
      catRotation = [0, 0.8, 0];
    }
    return [catScale, catRotation];
  };
  const [catScale, catRotation] = adjustCatForScreen();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
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
            catPosition={catPosition}
            position={roomPosition}
            scale={roomScale}
            rotation={roomRotation}
          />
          <Cat
            scale={catScale}
            rotation={catRotation}
            isRotating={isRotating}
            position={catPosition}
            setCatPosition={setCatPosition}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
