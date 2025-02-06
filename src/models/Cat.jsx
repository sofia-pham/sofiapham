import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import catScene from "../assets/3D models/cat.glb";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

const Cat = ({ isRotating, setCurrentStage, currentStage, ...props }) => {
  const catRef = useRef();
  const { camera, gl, scene } = useThree();
  const { nodes, materials, animations } = useGLTF(catScene);
  const { actions } = useAnimations(animations, catRef);

  useEffect(() => {
    const canvas = gl.domElement;

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const canvasWidth = rect.width;

      // Only activate for right 75% of screen
      if (clickX < canvasWidth * 0.25) return;

      // Divide right 75% into 3 vertical sections (25% each)
      const sectionWidth = (canvasWidth * 0.75) / 4;
      const sectionIndex = Math.floor(
        (clickX - canvasWidth * 0.25) / sectionWidth
      );

      // Map sections to stages 2-4
      const newStage = Math.min(4, 1 + sectionIndex);
      setCurrentStage(newStage);
    };

    canvas.addEventListener("click", handleClick);
    return () => canvas.removeEventListener("click", handleClick);
  }, [gl, setCurrentStage]);

  useEffect(() => {
    // Fade out the current animation
    if (isRotating) {
      actions["walking1"]?.reset().play();
    } else {
      actions["walking1"]?.fadeOut(0.5);

      // Handle transitions based on the current stage
      switch (currentStage) {
        case 1:
          actions["waving"]?.reset().play();
          break;
        case 2:
          actions["typing"]?.reset().play();
          break;
        case 3:
          actions["idling"]?.reset().play();
          break;
        case 4:
          actions["sitting"]?.reset().play();
          break;
        default:
          actions["idling"]?.reset().play();
      }
    }

    return () => {
      Object.values(actions).forEach((action) => {
        action?.fadeOut(0.5).stop();
      });
    };
  }, [actions, isRotating, currentStage]);

  useFrame(() => {
    if (currentStage === 1) {
      catRef.current.getObjectByName("spine006").lookAt(camera.position);
    }
  });

  return (
    <a.group ref={catRef} {...props}>
      <group name="Scene">
        <group
          name="Empty"
          position={[-2.799, 0.003, 0.003]}
          rotation={[1.508, 0.005, -0.077]}
        />
        <group
          name="ref_pic"
          position={[0, -0.031, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group
          name="ref_pic001"
          position={[2.862, -0.031, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group
          name="metarig"
          position={[-0.005, -0.03, 0.665]}
          rotation={[-0.079, -0.186, -0.034]}
        >
          <skinnedMesh
            name="body"
            geometry={nodes.body.geometry}
            material={materials["cat material"]}
            skeleton={nodes.body.skeleton}
          />
          <skinnedMesh
            name="bow"
            geometry={nodes.bow.geometry}
            material={materials["cat material"]}
            skeleton={nodes.bow.skeleton}
          />
          <skinnedMesh
            name="bow2"
            geometry={nodes.bow2.geometry}
            material={materials["cat material"]}
            skeleton={nodes.bow2.skeleton}
          />
          <skinnedMesh
            name="bow3"
            geometry={nodes.bow3.geometry}
            material={materials["cat material"]}
            skeleton={nodes.bow3.skeleton}
          />
          <skinnedMesh
            name="dress"
            geometry={nodes.dress.geometry}
            material={materials["cat material"]}
            skeleton={nodes.dress.skeleton}
          />
          <skinnedMesh
            name="eyebrows"
            geometry={nodes.eyebrows.geometry}
            material={materials["cat material"]}
            skeleton={nodes.eyebrows.skeleton}
          />
          <skinnedMesh
            name="eyes_pupil"
            geometry={nodes.eyes_pupil.geometry}
            material={materials["cat material"]}
            skeleton={nodes.eyes_pupil.skeleton}
          />
          <skinnedMesh
            name="eyes_white"
            geometry={nodes.eyes_white.geometry}
            material={materials["cat material"]}
            skeleton={nodes.eyes_white.skeleton}
          />
          <skinnedMesh
            name="head"
            geometry={nodes.head.geometry}
            material={materials["cat material"]}
            skeleton={nodes.head.skeleton}
          />
          <skinnedMesh
            name="nose"
            geometry={nodes.nose.geometry}
            material={materials["cat material"]}
            skeleton={nodes.nose.skeleton}
          />
          <skinnedMesh
            name="tail"
            geometry={nodes.tail.geometry}
            material={materials["cat material"]}
            skeleton={nodes.tail.skeleton}
          />
          <skinnedMesh
            name="whiskers"
            geometry={nodes.whiskers.geometry}
            material={materials["cat material"]}
            skeleton={nodes.whiskers.skeleton}
          />
          <skinnedMesh
            name="whiskers001"
            geometry={nodes.whiskers001.geometry}
            material={materials["cat material"]}
            skeleton={nodes.whiskers001.skeleton}
          />
          <skinnedMesh
            name="whiskers002"
            geometry={nodes.whiskers002.geometry}
            material={materials["cat material"]}
            skeleton={nodes.whiskers002.skeleton}
          />
          <primitive object={nodes.spine} />
          <primitive object={nodes.IK} />
        </group>
      </group>
    </a.group>
  );
};

export default Cat;
