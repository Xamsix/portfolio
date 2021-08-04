import gsap from "gsap";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Box as NativeBox } from "@react-three/drei";
import * as THREE from "three";

// import hypercoop from "../public/images/hypercoop.jpg";

export const Box = ({ hoveredItem }) => {
  const mesh = useRef();

  let hovered = false;

  useFrame(() => {
    const boxMesh = mesh.current;

    if (!hovered) {
      boxMesh.rotation.x += 0.005;
      boxMesh.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    hovered = hoveredItem;

    if (hoveredItem) {
      const xEuler = 1.57 * Math.round(mesh.current.rotation.x / 1.57);
      const yEuler = 1.57 * Math.round(mesh.current.rotation.y / 1.57);

      gsap.timeline().to(mesh.current.rotation, {
        x: xEuler,
        y: yEuler,
        duration: 1,
      });
    }
  }, [hoveredItem]);

  const texture = useMemo(
    () => new THREE.TextureLoader().load("./images/hypercoop.jpg"),
    []
  );

  return (
    <NativeBox
      args={[1, 1, 1]}
      radius={10}
      detail={4}
      position={[0, 0, 0]}
      scale={[20, 20, 20]}
      castShadow={true}
      rotation={[1.57, 0, 0]}
      ref={mesh}
    >
      <meshStandardMaterial attachArray="material" color="#010101" />
      <meshStandardMaterial attachArray="material" color="#010101">
        {/* <primitive attach="map" object={texture} /> */}
      </meshStandardMaterial>
      <meshStandardMaterial attachArray="material" color="#010101" />
      <meshStandardMaterial attachArray="material" color="#010101" />
      <meshStandardMaterial attachArray="material" color="#010101" />
      <meshStandardMaterial attachArray="material" color="#010101" />
    </NativeBox>
  );
};
