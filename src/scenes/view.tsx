"use client";

import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

export const Common = () => (
  <Suspense fallback={null}>
    <OrbitControls autoRotate autoRotateSpeed={0.5} />
    <ambientLight intensity={1.8} />
  </Suspense>
);

