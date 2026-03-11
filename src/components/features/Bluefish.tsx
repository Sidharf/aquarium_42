"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Blue fish — dark blue with yellow fins/tail. Click: eyes widen, wriggle 3s.
 * Region: center.
 */
export function Bluefish() {
  const groupRef = useRef<THREE.Group>(null);
  const [clicked, setClicked] = useState(false);
  const clickTime = useRef(0);
  const justClicked = useRef(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    if (justClicked.current) {
      clickTime.current = t;
      justClicked.current = false;
      setClicked(true);
    }
    groupRef.current.position.x = Math.sin(t * 0.3) * 0.5;
    groupRef.current.position.z = Math.cos(t * 0.2) * 0.3;
    if (clicked && t - clickTime.current > 3) setClicked(false);
    if (clicked) {
      groupRef.current.rotation.z = Math.sin(t * 15) * 0.2;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[0, 0, 0]}
      onClick={(e) => {
        e.stopPropagation();
        justClicked.current = true;
      }}
      onPointerOver={(e) => (e.stopPropagation(), (document.body.style.cursor = "pointer"))}
      onPointerOut={() => (document.body.style.cursor = "default")}
    >
      <mesh castShadow>
        <sphereGeometry args={[0.2, 16, 12]} />
        <meshStandardMaterial color="#1e3a5f" roughness={0.4} />
      </mesh>
      <mesh position={[0.15, 0, 0]} rotation={[0, 0, -0.3]} castShadow>
        <coneGeometry args={[0.08, 0.25, 8]} />
        <meshStandardMaterial color="#f1c40f" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.12, 0]} scale={clicked ? 1.4 : 1}>
        <sphereGeometry args={[0.04, 8, 6]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      <mesh position={[0, -0.12, 0]} scale={clicked ? 1.4 : 1}>
        <sphereGeometry args={[0.04, 8, 6]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
    </group>
  );
}
