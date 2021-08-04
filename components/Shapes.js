import gsap from "gsap";
import * as THREE from "three";

import { useRef, useEffect, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box as NativeBox } from "@react-three/drei";
import { Plane } from "@react-three/drei";

export const Shapes = ({ hoveredItem, clickedItem }) => {
  const mesh = useRef();
  const bottomPlane = useRef();
  const frontMesh = useRef();
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "./images/hypercoop-video.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    return vid;
  });

  useEffect(() => void video.play(), [video]);

  let hovered = false;

  const Raf = () =>
    useFrame((state) => {
      const boxMesh = mesh.current;

      if (!hovered) {
        boxMesh.rotation.x += 0.005;
        boxMesh.rotation.y += 0.005;
      } else {
        gsap.to(state.camera.position, {
          x: 0,
          y: 0,
          duration: 1,
        });
      }
    });

  useEffect(() => {
    if (clickedItem) {
      //TODO: Check if hover animation was completed before expanding
      mesh.current.rotation.x = 0;
      mesh.current.rotation.y = 0;

      const whiteColor = new THREE.Color("#FFFFFF");

      console.log(frontMesh.current);

      gsap
        .timeline()
        .to(mesh.current.scale, {
          x: 4,
          y: 2,
          duration: 1,
        })
        .to(frontMesh.current.color, {
          r: whiteColor.r,
          g: whiteColor.g,
          b: whiteColor.b,
          duration: 1,
        });
    }
  }, [clickedItem]);

  useEffect(() => {
    hovered = hoveredItem;

    if (hoveredItem) {
      const xEuler = 1.57 * Math.round(mesh.current.rotation.x / 1.57);
      const yEuler = 1.57 * Math.round(mesh.current.rotation.y / 1.57);

      gsap.to(mesh.current.rotation, {
        x: xEuler,
        y: yEuler,
        duration: 1,
      });
    }
  }, [hoveredItem]);

  let texture = useMemo(
    () => new THREE.TextureLoader().load("./images/hypercoop-video.mp4"),
    []
  );

  return (
    <>
      <NativeBox
        args={[20, 20, 20]}
        radius={10}
        detail={4}
        position={[0, 0, 0]}
        castShadow={true}
        rotation={[1.57, 0, 0]}
        ref={mesh}
      >
        <meshStandardMaterial attachArray="material" color="#010101" />
        <meshStandardMaterial attachArray="material" color="#010101" />
        <meshStandardMaterial attachArray="material" color="#010101" />
        <meshStandardMaterial attachArray="material" color="#010101" />
        <meshStandardMaterial
          attachArray="material"
          color="#010101"
          ref={frontMesh}
        >
          <videoTexture attach="map" args={[video]} />
        </meshStandardMaterial>
        <meshStandardMaterial attachArray="material" color="#010101" />
      </NativeBox>
      <Plane
        args={[400, 120, 120]}
        position={[0, -30, 0]}
        rotation-x={-Math.PI / 2}
        receiveShadow={true}
        ref={bottomPlane}
      >
        <meshPhongMaterial attach="material" color="#202020" />
      </Plane>
      <Plane
        args={[800, 300, 120]}
        position={[0, 0, -100]}
        receiveShadow={true}
      >
        <meshPhongMaterial attach="material" color="#202020" />
      </Plane>
      {!clickedItem && <Raf />}
    </>
  );
};
