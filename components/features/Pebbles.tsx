'use client';

import { useRef } from 'react';
import * as THREE from 'three';
import { MOCK_PEBBLES } from '@/data/mock';

const { count, color, spread } = MOCK_PEBBLES;

const positions = Array.from({ length: count }, (_, i) => ({
  x: (Math.random() - 0.5) * spread.x,
  z: (Math.random() - 0.5) * spread.z,
  s: 0.15 + Math.random() * 0.25,
}));

export function Pebbles() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef} position={[0, -3.5, 0]}>
      {positions.map((p, i) => (
        <mesh
          key={i}
          position={[p.x, 0, p.z]}
          scale={[p.s, p.s * 0.6, p.s]}
          castShadow
        >
          <sphereGeometry args={[1, 8, 6]} />
          <meshStandardMaterial
            color={color}
            roughness={0.9}
            metalness={0.05}
          />
        </mesh>
      ))}
    </group>
  );
}
