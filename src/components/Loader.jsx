import React from "react";
import { Html } from "@react-three/drei";

// this is a loader component that will be displayed when the page is loading because 3d models are being loaded
const Loader = () => {
  return (
    <Html center>
      <div className="flex justify-center items-center">
        {/* <div className="w-20 h-20 border-2 border-opacity-20 boarder-green-500 boarder-t-green-500 rounded-full animate-spin"> */}
        <div className="lg:w-80 lg:h-80 sm:w-20 sm:h-20">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXpwd3plcGlzOGNsYWRidm1kcWM5YTgweHVvN2dsb2EyaG9uYzZnaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif"
            alt="typing cat"
            className="rounded-full"
          />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
