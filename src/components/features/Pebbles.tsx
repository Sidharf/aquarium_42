"use client";

import { useRef, useMemo } from "react";
import * as THREE from "three";
import { MOCK_PEBBLES } from "@/data/mock";

/**
 * Pebbles — 3D tan rocks lining the bottom. Region: bottom-center.
 */
export function Pebbles() {
  const groupRef = useRef<THREE.Group>(null);
  const { count, colors } = MOCK_PEBBLES;

  const stones = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      key: i,
      position: [
        (Math.random() - 0.5) * 4,
        0.05 + Math.random() * 0.05,
        (Math.random() - 0.5) * 2,
      ] as [number, number, number],
      rotation: [Math.random() * 0.3, Math.random() * 6.28, Math.random() * 0.2] as [number, number, number],
      radius: 0.06 + Math.random() * 0.06,
      color: colors[i % colors.length],
    }));
  }, [count, colors]);

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {stones.map(({ key, position, rotation, radius, color }) => (
        <mesh key={key} castShadow position={position} rotation={rotation}>
          <sphereGeometry args={[radius, 6, 5]} />
          <meshStandardMaterial color={color} roughness={0.9} metalness={0.05} />
        </mesh>
      ))}
    </group>
  );
}
