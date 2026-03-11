"use client";

import { useRef } from "react";
import * as THREE from "three";

/**
 * Shipwreck — 3D broken ship, "seabench" on side. Region: bottom-left.
 */
export function Shipwreck() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef} position={[-2, -1.2, 0]}>
      <mesh castShadow position={[0, 0.3, 0]}>
        <boxGeometry args={[0.6, 0.25, 0.35]} />
        <meshStandardMaterial color="#8b6914" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh castShadow position={[0.1, 0.5, 0]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[0.4, 0.08, 0.3]} />
        <meshStandardMaterial color="#5d4e37" roughness={0.8} />
      </mesh>
      <mesh castShadow position={[-0.2, 0.15, 0]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[0.2, 0.15, 0.25]} />
        <meshStandardMaterial color="#6b5b45" roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.35, 0.18]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.5, 0.15]} />
        <meshBasicMaterial color="#1a1a1a" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
