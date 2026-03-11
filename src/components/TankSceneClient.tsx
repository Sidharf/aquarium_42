"use client";

import dynamic from "next/dynamic";

const TankScene = dynamic(() => import("@/components/TankScene").then((m) => ({ default: m.TankScene })), {
  ssr: false,
});

export function TankSceneClient() {
  return <TankScene />;
}
