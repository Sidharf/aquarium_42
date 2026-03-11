'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Waterline } from '@/components/features/Waterline';
import { TankFilter } from '@/components/features/TankFilter';
import { Bluefish } from '@/components/features/Bluefish';
import { Shipwreck } from '@/components/features/Shipwreck';
import { Orangefish } from '@/components/features/Orangefish';
import { Pebbles } from '@/components/features/Pebbles';
import { Plant } from '@/components/features/Plant';
import { MOCK_TANK } from '@/data/mock';

function TankContent() {
  const { width, height, depth } = MOCK_TANK;

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow shadow-mapSize={1024} />
      <pointLight position={[-3, 4, 2]} intensity={0.8} color="#5DA9FF" />
      <pointLight position={[4, 2, 3]} intensity={0.5} color="#4CD3A1" />

      {/* Glass tank - back and side walls only so we see inside */}
      <mesh position={[0, 0, -depth / 2 - 0.01]}>
        <planeGeometry args={[width, height]} />
        <meshPhysicalMaterial color="#88ccff" transparent opacity={0.2} side={2} />
      </mesh>
      <mesh position={[-width / 2 - 0.01, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[depth, height]} />
        <meshPhysicalMaterial color="#88ccff" transparent opacity={0.2} side={2} />
      </mesh>
      <mesh position={[width / 2 + 0.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[depth, height]} />
        <meshPhysicalMaterial color="#88ccff" transparent opacity={0.2} side={2} />
      </mesh>
      <mesh position={[0, -height / 2 - 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[width, depth]} />
        <meshPhysicalMaterial color="#3EC6B6" transparent opacity={0.3} roughness={0.8} />
      </mesh>

      {/* feature_layout: waterline top-center, tankfilter top-left, bluefish center, shipwreck bottom-left, orangefish bottom-right, plant bottom-right, pebbles bottom-center */}
      <Waterline />
      <TankFilter />
      <Bluefish />
      <Shipwreck />
      <Orangefish />
      <Plant />
      <Pebbles />
    </>
  );
}

export function TankScene() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#F7F9FB' }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#F7F9FB');
        }}
      >
        <TankContent />
        <OrbitControls
          enablePan
          enableZoom
          minDistance={5}
          maxDistance={20}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
