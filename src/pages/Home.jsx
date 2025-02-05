import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Room from "../models/Room";
import Sky from "../models/Sky";
import Cat from "../models/Cat";
import { ContactShadows } from "@react-three/drei";
import HomeInfo from "../components/HomeInfo";
import * as THREE from "three";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

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

  const adjustCatForScreen = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0.2, -0.7, 1];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [-0.2, -1.2, 1];
    }

    return [screenScale, screenPosition];
  };
  const [catScale, catPosition] = adjustCatForScreen();

  const stagePositions = {
    1: new THREE.Vector3(0, -1.5, 2), // Example position
    2: new THREE.Vector3(2, -1.5, -1.5),
    3: new THREE.Vector3(0, -1.5, 3),
    4: new THREE.Vector3(-2, -1.5, -2),
  };

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
          <directionalLight position={[-100, 21, 5]} intensity={2} />
          <ambientLight intensity={0.5} />
          <spotLight position={[[0, 0, 0]]} angle={0.15} penumbra={1} />
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
            isRotating={isRotating}
            position={catPosition}
            scale={catScale}
            rotation={[0, 35, 0]}
            targetPosition={stagePositions[currentStage]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
