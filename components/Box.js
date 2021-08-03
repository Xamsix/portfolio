import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box as NativeBox } from "@react-three/drei";

export const Box = () => {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <NativeBox
      args={[1, 1, 1]}
      radius={10}
      detail={4}
      position={[0, 0, 0]}
      scale={[20, 20, 20]}
      castShadow={true}
      rotation={[45, 45, 0]}
      ref={mesh}
    >
      <meshStandardMaterial attachArray="material" color="#e27d60" />
      <meshStandardMaterial attachArray="material" color="#85dcb0" />
      <meshStandardMaterial attachArray="material" color="#e8a87c" />
      <meshStandardMaterial attachArray="material" color="#c38d9e" />
      <meshStandardMaterial attachArray="material" color="#41b3a3" />
      <meshStandardMaterial attachArray="material" color="#ff0000" />
    </NativeBox>
  );
};
