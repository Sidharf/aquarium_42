"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Clownfish — orange/white stripes, swims near bottom-right close to plant.
 * Region: bottom-right.
 */
export function Orangefish() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.x = 1.2 + Math.sin(t * 0.4) * 0.4;
    groupRef.current.position.y = -1 + Math.cos(t * 0.3) * 0.2;
    groupRef.current.position.z = 0.8 + Math.sin(t * 0.25) * 0.2;
    groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.3;
  });

  return (
    <group ref={groupRef} position={[1.2, -1, 0.8]}>
      <mesh castShadow>
        <sphereGeometry args={[0.15, 12, 10]} />
        <meshStandardMaterial color="#e67e22" roughness={0.5} />
      </mesh>
      <mesh position={[0.12, 0, 0]} rotation={[0, 0, -0.2]} castShadow>
        <coneGeometry args={[0.05, 0.18, 6]} />
        <meshStandardMaterial color="#e67e22" roughness={0.5} />
      </mesh>
    </group>
  );
}
