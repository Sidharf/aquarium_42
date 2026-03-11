'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MOCK_BLUE_FISH } from '@/data/mock';

const WRIGGLE_DURATION = MOCK_BLUE_FISH.clickWriggleDuration;

export function Bluefish() {
  const groupRef = useRef<THREE.Group>(null);
  const [wriggleUntil, setWriggleUntil] = useState(0);
  const eyesWiden = MOCK_BLUE_FISH.eyesWiden;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const wriggling = t < wriggleUntil;
    if (wriggling) {
      groupRef.current.rotation.z = Math.sin(t * 20) * 0.3;
      groupRef.current.scale.setScalar(1 + Math.sin(t * 25) * 0.05);
    } else {
      groupRef.current.position.x = Math.sin(t * 0.5) * 1.5;
      groupRef.current.position.z = Math.cos(t * 0.3) * 1;
    }
  });

  const handleClick = () => {
    setWriggleUntil(
      typeof performance !== 'undefined'
        ? performance.now() / 1000 + WRIGGLE_DURATION
        : 0
    );
  };

  return (
    <group
      ref={groupRef}
      position={[MOCK_BLUE_FISH.position.x, MOCK_BLUE_FISH.position.y, MOCK_BLUE_FISH.position.z]}
      onClick={handleClick}
    >
      {/* Body - dark blue */}
      <mesh castShadow>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#1a237e" roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Fins - yellow */}
      <mesh position={[0, 0.2, 0.3]} rotation={[0.5, 0, 0]} castShadow>
        <coneGeometry args={[0.15, 0.25, 8]} />
        <meshStandardMaterial color="#ffeb3b" roughness={0.6} />
      </mesh>
      <mesh position={[0, -0.15, 0.35]} rotation={[0.3, 0, 0]} castShadow>
        <coneGeometry args={[0.2, 0.35, 8]} />
        <meshStandardMaterial color="#ffeb3b" roughness={0.6} />
      </mesh>
      {/* Eyes */}
      <mesh position={[0.2, 0.1, 0.25]} castShadow>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-0.2, 0.1, 0.25]} castShadow>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}
