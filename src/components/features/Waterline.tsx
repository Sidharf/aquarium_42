"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Waterline — 3D dynamic water at top of tank with shimmer and bubbles.
 * Region: top-center.
 */
export function Waterline() {
  const meshRef = useRef<THREE.Mesh>(null);
  const bubblesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
    if (bubblesRef.current) {
      bubblesRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const bubbleCount = 40;
  const bubblePositions = new Float32Array(bubbleCount * 3);
  for (let i = 0; i < bubbleCount; i++) {
    bubblePositions[i * 3] = (Math.random() - 0.5) * 4;
    bubblePositions[i * 3 + 1] = Math.random() * 0.5;
    bubblePositions[i * 3 + 2] = (Math.random() - 0.5) * 2;
  }

  return (
    <group position={[0, 2.2, 0]}>
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[5, 2.5]} />
        <meshStandardMaterial
          color="#4CD3A1"
          transparent
          opacity={0.75}
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>
      <points ref={bubblesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[bubblePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#ffffff" transparent opacity={0.9} sizeAttenuation />
      </points>
    </group>
  );
}
