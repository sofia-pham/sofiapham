import React from "react";
import { Html } from "@react-three/drei";

// this is a loader component that will be displayed when the page is loading because 3d models are being loaded
const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-64 h-64 lg:w-80 lg:h-80">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXpwd3plcGlzOGNsYWRidm1kcWM5YTgweHVvN2dsb2EyaG9uYzZnaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif"
            alt="typing cat"
            className="rounded-full "
          />
        </div>
        <p className="text-black-500 text-center lg:text-lg font-semibold text-sm mt-4">
          LOADING . . .
        </p>
        <p className="text-gray-500 text-center sm:text-xs text-sm mt-4">
          pretty please with a cherry on top use graphics acceleration 🥺🙏
        </p>
      </div>
    </Html>
  );
};

export default Loader;
