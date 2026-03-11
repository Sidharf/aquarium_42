'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MOCK_WATER } from '@/data/mock';

export function Waterline() {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { shimmerSpeed, bubbleCount, waveAmplitude } = MOCK_WATER;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * shimmerSpeed) * waveAmplitude;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
    }
  });

  const bubblePositions = Array.from({ length: bubbleCount }, (_, i) => ({
    x: (Math.random() - 0.5) * 10,
    y: Math.random() * 2,
    z: (Math.random() - 0.5) * 4,
  }));

  return (
    <group position={[0, 3.5, 0]}>
      {/* Water surface plane - top-center region */}
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[14, 8]} />
        <meshStandardMaterial
          color="#5DA9FF"
          transparent
          opacity={0.6}
          metalness={0.3}
          roughness={0.1}
        />
      </mesh>
      {/* Bubbles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={bubbleCount}
            array={new Float32Array(
              bubblePositions.flatMap((p) => [p.x, p.y, p.z])
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#ffffff"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
