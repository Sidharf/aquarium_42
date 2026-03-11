'use client';

import { useRef } from 'react';
import * as THREE from 'three';
import { MOCK_SHIPWRECK } from '@/data/mock';

export function Shipwreck() {
  const groupRef = useRef<THREE.Group>(null);
  const { position, title, scale } = MOCK_SHIPWRECK;

  return (
    <group
      ref={groupRef}
      position={[position.x, position.y, position.z]}
      scale={scale}
 rotation={[0, 0.3, 0]}
    >
      {/* Hull - broken boat shape */}
      <mesh castShadow position={[0, 0.3, 0]}>
        <boxGeometry args={[1.5, 0.5, 0.8]} />
        <meshStandardMaterial
          color="#5d4037"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      {/* Mast stump */}
      <mesh castShadow position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.5, 8]} />
        <meshStandardMaterial color="#4e342e" roughness={0.9} />
      </mesh>
      {/* Side with "seabench" - simplified as a plane */}
      <mesh position={[0.75, 0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <planeGeometry args={[0.5, 0.8]} />
        <meshBasicMaterial color="#1a1a1a" side={THREE.DoubleSide} />
      </mesh>
      {/* Deck detail */}
      <mesh castShadow position={[0, 0.5, 0.1]}>
        <boxGeometry args={[1.2, 0.15, 0.6]} />
        <meshStandardMaterial color="#6d4c41" roughness={0.85} />
      </mesh>
    </group>
  );
}
