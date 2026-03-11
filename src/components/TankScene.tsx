"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Waterline } from "./features/Waterline";
import { TankFilter } from "./features/TankFilter";
import { Bluefish } from "./features/Bluefish";
import { Orangefish } from "./features/Orangefish";
import { Shipwreck } from "./features/Shipwreck";
import { Plant } from "./features/Plant";
import { Pebbles } from "./features/Pebbles";

function TankContent() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-2, 3, 2]} intensity={0.4} color="#5DA9FF" />
      <Waterline />
      <TankFilter />
      <Bluefish />
      <Orangefish />
      <Shipwreck />
      <Plant />
      <Pebbles />
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial color="#1e3a5f" transparent opacity={0.15} />
      </mesh>
      <OrbitControls enablePan enableZoom enableRotate maxPolarAngle={Math.PI / 2 + 0.2} />
    </>
  );
}

export function TankScene() {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#F7F9FB]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <TankContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
