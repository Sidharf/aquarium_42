'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MOCK_FILTER } from '@/data/mock';

export function TankFilter() {
  const groupRef = useRef<THREE.Group>(null);
  const [isOn, setIsOn] = useState(MOCK_FILTER.isOn);

  useFrame((state) => {
    if (groupRef.current && isOn) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[-4.5, 2.5, -2]}
      onClick={() => setIsOn((o) => !o)}
    >
      {/* Metal filter body - cylindrical (footprint from design ref) */}
      <mesh castShadow>
        <cylinderGeometry args={[0.4, 0.5, 1.2, 16]} />
        <meshStandardMaterial
          color="#8a8a8a"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
      {/* Top switch - clickable cap */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.4, 0.25, 16]} />
        <meshStandardMaterial
          color={isOn ? '#4CD3A1' : '#6B7280'}
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
      {/* Intake tube */}
      <mesh position={[0, -0.4, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.25, 0.5, 12]} />
        <meshStandardMaterial
          color="#6a6a6a"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}
