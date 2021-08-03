import styled from "styled-components";
import { useRef, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Octahedron,
  PerspectiveCamera,
  Plane,
  Box,
} from "@react-three/drei";

import { Lights } from "./Lights";

export const Three = () => {
  const meshOne = useRef();

  useEffect(() => {
    if (meshOne) {
      console.log(meshOne.current);
    }
  }, [meshOne]);

  return (
    <Component>
      <Canvas dpr={[1, 2]} shadows>
        <Lights />
        <PerspectiveCamera makeDefault position={[0, 0, 100]} />
        <Box
          args={[1, 1, 1]}
          radius={10}
          detail={4}
          position={[0, 0, 0]}
          scale={[20, 20, 20]}
          castShadow={true}
          ref={meshOne}
        >
          <meshStandardMaterial attachArray="material" color="#fff600" />
          <meshStandardMaterial attachArray="material" color="#ff0000" />
          <meshStandardMaterial attachArray="material" color="#fff600" />
          <meshStandardMaterial attachArray="material" color="#ff0000" />
          <meshStandardMaterial attachArray="material" color="#fff600" />
          <meshStandardMaterial attachArray="material" color="#ff0000" />
        </Box>
        <Plane
          args={[260, 120, 120]}
          position={[0, -30, 0]}
          rotation-x={-Math.PI / 2}
          receiveShadow={true}
        >
          <meshPhongMaterial attach="material" color="#202020" />
        </Plane>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Component>
  );
};

const Component = styled.div`
  width: 100%;
  height: 100%;
`;
