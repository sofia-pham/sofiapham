import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";

import catScene from "../assets/3D models/cat.glb";
import { useFrame } from "@react-three/fiber";

const Cat = ({ isRotating, currentStage, ...props }) => {
  const catRef = useRef();
  const { nodes, materials, scene, animations } = useGLTF(catScene);
  const { actions } = useAnimations(animations, catRef);

  useEffect(() => {
    if (isRotating) {
      actions["typing"]?.fadeOut(0.5);
      actions["walking1"]?.reset().fadeIn(0.5).play();
    } else {
      actions["walking1"]?.fadeOut(0.5);
      actions["typing"]?.reset().fadeIn(0.5).play();
    }
  }, [actions, isRotating]);

  useFrame(({ clock, camera }) => {
    // catRef.current.rotation.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    // if (catRef.current.position.x >= camera.position.x + 10) {
    //   catRef.current.rotation.y = Math.PI;
    // } else if (catRef.current.position.x <= camera.position.x - 10) {
    //   catRef.current.rotation.y = 0;
    // }
    // if (catRef.current.rotation.y === 0) {
    //   catRef.current.position.x += 0.01;
    //   catRef.current.position.z -= 0.01;
    // } else {
    //   catRef.current.position.x -= 0.01;
    //   catRef.current.position.z += 0.01;
    // }
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
