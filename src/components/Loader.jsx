import React from "react";
import { Html } from "@react-three/drei";

// this is a loader component that will be displayed when the page is loading because 3d models are being loaded
const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 boarder-blue-500 boarder-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
