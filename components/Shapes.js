import gsap from "gsap";
import * as THREE from "three";

import { useRef, useEffect, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box as NativeBox } from "@react-three/drei";
import { Plane, Reflector, useTexture } from "@react-three/drei";

export const Shapes = ({ clickedItem }) => {
  const mesh = useRef();
  const [showReflection, setShowReflection] = useState(false);
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

  const Raf = () =>
    useFrame((state) => {
      const boxMesh = mesh.current;

      boxMesh.rotation.x += 0.005;
      boxMesh.rotation.y += 0.005;
    });

  useEffect(() => {
    if (clickedItem) {
      const xEuler = 1.57 * Math.round(mesh.current.rotation.x / 1.57);
      const yEuler = 1.57 * Math.round(mesh.current.rotation.y / 1.57);
      const whiteColor = new THREE.Color("#FFFFFF");

      gsap
        .timeline()
        .to(mesh.current.rotation, {
          x: xEuler,
          y: yEuler,
          duration: 1,
          onComplete: () => {
            mesh.current.rotation.x = 0;
            mesh.current.rotation.y = 0;
          },
        })
        .to(mesh.current.scale, {
          x: 4,
          y: 2,
          duration: 1,
          onComplete: () => {
            setShowReflection(true);
          },
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
    if (clickedItem) {
    }
  }, [clickedItem]);

  // const floor = useMemo(
  //   () => new THREE.TextureLoader().load("./images/floor.jpg"),
  //   []
  // );

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
      <Reflector
        resolution={1024}
        args={[400, 200, 120]}
        position={[0, -20, 0]}
        rotation-x={-Math.PI / 2}
        receiveShadow={true}
        mirror={0.8}
        mixBlur={0.8}
        mixStrength={showReflection ? 0.6 : 0}
        depthScale={1}
      >
        {(Material, props) => (
          <Material
            color="#a0a0a0"
            normalScale={[0.6, 0.6]}
            metalness={0}
            {...props}
          />
        )}
      </Reflector>

      <Reflector
        resolution={1024}
        args={[800, 300, 120]}
        position={[0, 0, -100]}
        receiveShadow={true}
        mirror={1}
        mixBlur={8}
        mixStrength={1}
        blur={[400, 100]}
      >
        {(Material, props) => (
          <Material
            color="#a0a0a0"
            normalScale={[0.6, 0.6]}
            metalness={0}
            {...props}
          />
        )}
      </Reflector>
      {!clickedItem && <Raf />}
    </>
  );
};
