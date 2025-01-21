import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Room from "../models/Room";
import Sky from "../models/Sky";
import Cat from "../models/Cat";
// import Plane from "../models/Plane";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  // to make room look nice on all devices
  const adjustRoomForScreen = () => {
    let screenScale = null;
    let screenPosition = [4, -4, -4];
    let rotation = [0.1, -49.9, 0];

    if (window.innerWidth < 768) {
      screenScale = [1.2, 1.2, 1.2];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [roomScale, roomPosition, roomRotation] = adjustRoomForScreen();

  // to make cat look nice on all devices
  const adjustCatForScreen = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [2.2, -3.05, -5];
      // screenPosition = [2, -7, -5];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [2.2, -3.05, -5];
    }

    return [screenScale, screenPosition];
  };
  const [catScale, catPosition] = adjustCatForScreen();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        } bg-transparent`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* distant light source like the sun */}
          <directionalLight position={[-10, 1, -4]} intensity={2} />{" "}
          {/* ambientLight lights up the scene equally, no need for position */}
          <ambientLight intensity={0.5} />
          <spotLight position={[[4, 4, 4]]} angle={0.15} penumbra={1} />
          <hemisphereLight
            skyColor={"#b1e1ff"}
            groundColor={"#000000"}
            intensity={1}
          />
          <Cat
            isRotating={isRotating}
            position={catPosition}
            scale={catScale}
            rotation={[0, 35, 0]}
          />
          <Sky isRotating={isRotating} />
          <Room
            position={roomPosition}
            scale={roomScale}
            rotation={roomRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
