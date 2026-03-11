'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MOCK_ORANGE_FISH } from '@/data/mock';

export function Orangefish() {
  const groupRef = useRef<THREE.Group>(null);
  const { position, swimSpeed } = MOCK_ORANGE_FISH;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    // Stay near bottom-right, random-ish movement
    groupRef.current.position.x = position.x + Math.sin(t * swimSpeed) * 1.2;
    groupRef.current.position.z = position.z + Math.cos(t * 0.7) * 0.8;
    groupRef.current.position.y = position.y + Math.sin(t * 0.5) * 0.3;
    groupRef.current.rotation.y = Math.sin(t * swimSpeed) * 0.5;
  });

  return (
    <group ref={groupRef} position={[position.x, position.y, position.z]}>
      {/* Clownfish body - orange and white */}
      <mesh castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#ff9800" roughness={0.5} />
      </mesh>
      {/* White stripe */}
      <mesh position={[0, 0, 0.2]} castShadow>
        <boxGeometry args={[0.05, 0.5, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0, -0.15]} castShadow>
        <boxGeometry args={[0.05, 0.4, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Tail */}
      <mesh position={[0, 0, -0.35]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <coneGeometry args={[0.15, 0.25, 6]} />
        <meshStandardMaterial color="#ff9800" />
      </mesh>
    </group>
  );
}
