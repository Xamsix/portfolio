import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Plane } from "@react-three/drei";

import { Lights } from "./Lights";
import { Shapes } from "./Shapes";

export const Three = ({ hoveredItem, clickedItem }) => {
  return (
    <Component>
      <Canvas dpr={[1, 2]} shadows>
        <Lights hoveredItem={hoveredItem} clickedItem={clickedItem} />
        <PerspectiveCamera makeDefault position={[0, 0, 100]} />
        <Shapes hoveredItem={hoveredItem} clickedItem={clickedItem} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Component>
  );
};

const Component = styled.div`
  width: 100%;
  height: 100%;
`;
