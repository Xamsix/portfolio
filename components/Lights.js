import gsap from "gsap";

import { useEffect, useRef } from "react";

import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";

import * as THREE from "three";

export const Lights = ({ hoveredItem, clickedItem }) => {
  const spotRefOne = useRef();
  const spotRefTwo = useRef();
  //   useHelper(spotRef, SpotLightHelper, "teal");

  useEffect(() => {
    let newColor;

    if (!hoveredItem && !clickedItem) {
      newColor = new THREE.Color("red");
    } else {
      newColor = new THREE.Color("#FF00F5");
    }

    //TODO: This should be shorter
    gsap
      .timeline()
      .to(spotRefOne.current.color, {
        r: newColor.r,
        g: newColor.g,
        b: newColor.b,
        duration: 1,
      })
      .to(spotRefTwo.current.color, {
        r: newColor.r,
        g: newColor.g,
        b: newColor.b,
        duration: 1,
        delay: -1,
      })
      .to(spotRefOne.current, {
        intensity: hoveredItem ? 6 : 2,
        duration: 1,
        delay: -1,
      })
      .to(spotRefTwo.current, {
        intensity: hoveredItem ? 6 : 2,
        duration: 1,
        delay: -1,
      });
  }, [hoveredItem, clickedItem]);

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
        ref={spotRefOne}
      />
      <spotLight
        position={[-40, 30, 0]}
        penumbra={0.5}
        angle={0.5}
        color="red"
        castShadow={false}
        intensity={2}
        ref={spotRefTwo}
      />
      <spotLight
        position={[0, 200, 0]}
        penumbra={1}
        angle={0.2}
        color="white"
        castShadow={true}
        intensity={0.6}
      />
    </>
  );
};
