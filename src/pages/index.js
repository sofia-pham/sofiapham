import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const isWebGLAvailable = () => {
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      return context !== null && context !== undefined;
    } catch (e) {
      return false;
    }
  };
  
  const hasGraphicsAccelerator = isWebGLAvailable();
  const cpuCores = navigator.hardwareConcurrency || "Unknown";
  
  console.log(hasGraphicsAccelerator ? "Graphics Accelerator Available" : "No Graphics Accelerator");
  console.log(`Number of CPU cores: ${cpuCores}`);
  

export { Home, About, Projects, Contact };