"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Plant — lush leafy plant from pebbles; sways with water. Click-drag: elastic swing.
 * Region: bottom-right.
 */
export function Plant() {
  const groupRef = useRef<THREE.Group>(null);
  const swingRef = useRef(0);
  const [dragging, setDragging] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    if (!dragging) {
      swingRef.current *= 0.98;
      groupRef.current.rotation.z = Math.sin(t * 0.8) * 0.1 + swingRef.current;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[1.8, -1.1, 0.5]}
      onPointerDown={() => setDragging(true)}
      onPointerUp={() => {
        setDragging(false);
        swingRef.current = 0.3;
      }}
      onPointerOver={(e) => (e.stopPropagation(), (document.body.style.cursor = "grab"))}
      onPointerOut={() => (document.body.style.cursor = "default", setDragging(false))}
    >
      <mesh castShadow position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.03, 0.05, 0.4, 8]} />
        <meshStandardMaterial color="#27ae60" roughness={0.8} />
      </mesh>
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          castShadow
          position={[0.1 * (i - 1.5), 0.4 + i * 0.15, 0]}
          rotation={[0, 0, (i - 1.5) * 0.2]}
        >
          <sphereGeometry args={[0.12, 8, 6]} />
          <meshStandardMaterial color="#2ecc71" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}
