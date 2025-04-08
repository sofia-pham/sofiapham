import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Room from "../models/Room";
import Sky from "../models/Sky";
import Cat from "../models/Cat";
import HomeInfo from "../components/HomeInfo";
import Camera from "../components/Camera";
import useAdjustments from "../hooks/useAdjustments";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const {
    roomScale,
    roomPosition,
    roomRotation,
    catScale,
    catRotation,
    catPosition,
    bubblePositions,
  } = useAdjustments(currentStage);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute bottom-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[5]">
        {bubblePositions.map((pos, index) => (
          <div
            key={index}
            className="absolute lg:w-8 lg:h-8 w-6 h-6 bg-fuchsia-600 opacity-70 rounded-full animate-bounce"
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
