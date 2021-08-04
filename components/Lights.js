import { useRef } from "react";

import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";

export const Lights = () => {
  const spotRef = useRef();
  //   useHelper(spotRef, SpotLightHelper, "teal");

  return (
    <>
      <ambientLight intensity={1} />
      <spotLight
        position={[40, 30, 0]}
        penumbra={0.5}
        angle={0.5}
        color="red"
        castShadow={false}
        intensity={2}
      />
      <spotLight
        position={[-40, 30, 0]}
        penumbra={0.5}
        angle={0.5}
        color="red"
        castShadow={false}
        intensity={2}
      />
      <spotLight
        position={[0, 200, 0]}
        penumbra={1}
        angle={0.2}
        color="white"
        castShadow={true}
        ref={spotRef}
        intensity={0.6}
      />
    </>
  );
};
