import styled from "styled-components";
import { useRef, useEffect } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Octahedron,
  PerspectiveCamera,
  Plane,
} from "@react-three/drei";

import { Lights } from "./Lights";
import { Box } from "./Box";

export const Three = () => {
  return (
    <Component>
      <Canvas dpr={[1, 2]} shadows>
        <Lights />
        <PerspectiveCamera makeDefault position={[0, 0, 100]} />
        <Box />
        <Plane
          args={[400, 120, 120]}
          position={[0, -30, 0]}
          rotation-x={-Math.PI / 2}
          receiveShadow={true}
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
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Component>
  );
};

const Component = styled.div`
  width: 100%;
  height: 100%;
`;
