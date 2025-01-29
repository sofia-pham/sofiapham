import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Room from "../models/Room";
import Sky from "../models/Sky";
import Cat from "../models/Cat";
import Camera from "../components/Camera";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  // to make room + cat look nice on all devices
  const adjustForScreen = () => {
    let screenScale = null;
    let screenPosition = [4, -3.5, 0];
    let rotation = [0, -49.8, 0];

    if (window.innerWidth < 768) {
      screenScale = [1.2, 1.2, 1.2];
    } else {
      screenScale = [1, 1, 1];
    }

    return { screenScale, screenPosition, rotation };
  };

  const { screenScale, screenPosition, rotation } = adjustForScreen();
  // code to separate room and cat

  // // to make room look nice on all devices
  // const adjustRoomForScreen = () => {
  //   let screenScale = null;
  //   let screenPosition = [3, -4, -2];
  //   let rotation = [0.1, -50, 0];

  //   if (window.innerWidth < 768) {
  //     screenScale = [1.2, 1.2, 1.2];
  //   } else {
  //     screenScale = [1, 1, 1];
  //   }

  //   return [screenScale, screenPosition, rotation];
  // };
  // const [roomScale, roomPosition, roomRotation] = adjustRoomForScreen();

  // // to make cat look nice on all devices
  // const adjustCatForScreen = () => {
  //   let screenScale, screenPosition;

  //   if (window.innerWidth < 768) {
  //     screenScale = [1, 1, 1];
  //     // screenPosition = [0.5, -2.5, -3.5];
  //     screenPosition = [2.2, -3.05, -5];
  //   } else {
  //     screenScale = [1, 1, 1];
  //     screenPosition = [2.2, -3.05, -5];
  //   }

  //   return [screenScale, screenPosition];
  // };
  // const [catScale, catPosition] = adjustCatForScreen();

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
          {/* distant light source like the sun */}
          <directionalLight position={[-100, 21, 5]} intensity={2} />{" "}
          {/* ambientLight lights up the scene equally, no need for position */}
          <ambientLight intensity={0.5} />
          <spotLight position={[[0, 0, 0]]} angle={0.15} penumbra={1} />
          <hemisphereLight
            skyColor={"#b1e1ff"}
            groundColor={"#000000"}
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <group
            position={screenPosition}
            scale={screenScale}
            rotation={rotation}
          >
            <ContactShadows
              opacity={0.42}
              scale={10}
              blur={1}
              far={10}
              resolution={256}
              color="#000000"
            />
            <Room
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              position={[-0.5, -1, 0.3]}
            />
            <Cat
              isRotating={isRotating}
              position={[-2.2, 1.3, -2]}
              rotation={[0, 35, 0]}
            />
          </group>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
