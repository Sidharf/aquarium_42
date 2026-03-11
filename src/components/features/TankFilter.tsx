"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Tank filter — interactive 3D metal filter; top is clickable switch.
 * When on: reduces green scum. When off: scum accumulates (10s to cover).
 * Region: top-left.
 */
export function TankFilter() {
  const groupRef = useRef<THREE.Group>(null);
  const [on, setOn] = useState(true);
  const scumRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!scumRef.current) return;
    const t = state.clock.elapsedTime;
    const mat = scumRef.current.material as THREE.MeshBasicMaterial;
    mat.opacity = on ? 0 : Math.min(1, (t % 12) / 10) * 0.6;
  });

  return (
    <group
      ref={groupRef}
      position={[-2, 1.5, -0.5]}
      onClick={() => setOn((v) => !v)}
      onPointerOver={(e) => (e.stopPropagation(), (document.body.style.cursor = "pointer"))}
      onPointerOut={() => (document.body.style.cursor = "default")}
    >
      <mesh castShadow>
        <cylinderGeometry args={[0.15, 0.2, 0.6, 16]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.35, 0]} castShadow>
        <sphereGeometry args={[0.12, 12, 8]} />
        <meshStandardMaterial color={on ? "#4CD3A1" : "#95a5a6"} metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh ref={scumRef} position={[0, 0, 0]} visible>
        <planeGeometry args={[0.01, 0.01]} />
        <meshBasicMaterial color="#2ecc71" transparent opacity={0} />
      </mesh>
    </group>
  );
}
