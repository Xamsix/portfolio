import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Box as NativeBox } from "@react-three/drei";
import * as THREE from "three";

// import hypercoop from "../public/images/hypercoop.jpg";

export const Box = () => {
  const mesh = useRef();

  useFrame(() => {
    const boxMesh = mesh.current;

    boxMesh.rotation.x += 0.005;
  });

  useEffect(() => {
    console.log(mesh);
  }, [mesh]);

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
      rotation={[45, 45, 0]}
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
