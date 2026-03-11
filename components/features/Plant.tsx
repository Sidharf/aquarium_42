'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import type { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { MOCK_PLANT } from '@/data/mock';

export function Plant() {
  const groupRef = useRef<THREE.Group>(null);
  const [swing, setSwing] = useState(0);
  const { position, swaySpeed, elasticSwing } = MOCK_PLANT;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const naturalSway = Math.sin(t * swaySpeed) * 0.15;
    const elastic = swing * Math.exp(-t * 0.8);
    groupRef.current.rotation.z = naturalSway + elastic;
  });

  const handlePointerUp = (_e: ThreeEvent<PointerEvent>) => {
    if (elasticSwing) setSwing(0.5);
  };

  return (
    <group
      ref={groupRef}
      position={[position.x, position.y, position.z]}
      onPointerUp={handlePointerUp}
    >
      {/* Stem */}
      <mesh castShadow position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1, 8]} />
        <meshStandardMaterial color="#2e7d32" roughness={0.8} />
      </mesh>
      {/* Leaves */}
      {[0.3, 0.5, 0.7].map((y, i) => (
        <mesh
          key={i}
          position={[0.2 * (i - 1), y, 0]}
          rotation={[0, 0, (i - 1) * 0.4]}
          castShadow
        >
          <sphereGeometry args={[0.25, 10, 10, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#388e3c" roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}
