import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Octahedron,
  PerspectiveCamera,
} from "@react-three/drei";

export const Three = () => {
  return (
    <Component>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 100]} />
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        {/* <Box position={[0, 0, 0]} /> */}
        <Octahedron
          args={[1, 1, 1]}
          radius={10}
          detail={4}
          position={[0, 0, 0]}
          scale={[20, 20, 20]}
        >
          <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
        </Octahedron>
        <OrbitControls />
      </Canvas>
    </Component>
  );
};

const Component = styled.div`
  color: white;
  width: 100%;
  height: 100%;
`;
