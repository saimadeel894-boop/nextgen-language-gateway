import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, Sphere, Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

export type SceneVariant = "hero" | "accent";

const GOLD = "#d9a441";
const GOLD_LIGHT = "#f0cf8a";
const NAVY_LIGHT = "#5b7bc4";

function Rig({ children, speed = 0.06 }: { children: React.ReactNode; speed?: number }) {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.35 - group.current.rotation.y) * 0.03;
    group.current.rotation.x += (-y * 0.2 - group.current.rotation.x) * 0.03;
    group.current.position.y = Math.sin(state.clock.elapsedTime * speed * 4) * 0.08;
  });
  return <group ref={group}>{children}</group>;
}

function SpinningTorus({
  position,
  scale = 1,
  color,
}: {
  position: [number, number, number];
  scale?: number;
  color: string;
}) {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.15;
    mesh.current.rotation.z += delta * 0.1;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.6}>
      <Torus ref={mesh} args={[1, 0.09, 32, 128]} position={position} scale={scale}>
        <meshStandardMaterial color={color} metalness={0.95} roughness={0.18} />
      </Torus>
    </Float>
  );
}

function GlassBall({
  position,
  scale = 1,
  color,
  opacity = 0.35,
}: {
  position: [number, number, number];
  scale?: number;
  color: string;
  opacity?: number;
}) {
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      <Sphere args={[1, 48, 48]} position={position} scale={scale}>
        <meshPhysicalMaterial
          color={color}
          transmission={0.85}
          thickness={1.1}
          roughness={0.12}
          metalness={0.15}
          transparent
          opacity={opacity}
          clearcoat={1}
        />
      </Sphere>
    </Float>
  );
}

function Shard({ position, scale }: { position: [number, number, number]; scale: number }) {
  return (
    <Float speed={0.9} rotationIntensity={1.2} floatIntensity={0.8}>
      <Icosahedron args={[1, 0]} position={position} scale={scale}>
        <meshStandardMaterial color={GOLD_LIGHT} metalness={1} roughness={0.25} flatShading />
      </Icosahedron>
    </Float>
  );
}

export default function AbstractScene({ variant = "hero" }: { variant?: SceneVariant }) {
  const isHero = variant === "hero";
  const dpr = useMemo<[number, number]>(() => [1, isHero ? 1.6 : 1.25], [isHero]);

  return (
    <Canvas
      dpr={dpr}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, isHero ? 9 : 6.5], fov: 42 }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 3]} intensity={2.1} color={GOLD_LIGHT} />
      <directionalLight position={[-5, -2, -3]} intensity={1.1} color={NAVY_LIGHT} />
      <Environment preset="city" />

      <Rig speed={isHero ? 0.08 : 0.05}>
        {isHero ? (
          <>
            <SpinningTorus position={[1.5, 2.2, 0]} scale={1.5} color={GOLD} />
            <SpinningTorus position={[-2.4, -2.4, -1]} scale={0.9} color={GOLD_LIGHT} />
            <GlassBall position={[2.7, -2.2, -1]} scale={1} color={NAVY_LIGHT} opacity={0.45} />
            <GlassBall position={[-2.6, 2.3, -2]} scale={0.7} color={GOLD_LIGHT} opacity={0.4} />
            <Shard position={[3.3, 1.2, -1]} scale={0.45} />
            <Shard position={[-0.6, -3.1, 0.4]} scale={0.35} />
          </>
        ) : (
          <>
            <SpinningTorus position={[0, 0.2, 0]} scale={1.25} color={GOLD} />
            <GlassBall position={[1.6, -0.9, -0.5]} scale={0.55} color={NAVY_LIGHT} opacity={0.45} />
            <Shard position={[-1.7, 0.9, -0.5]} scale={0.34} />
          </>
        )}
      </Rig>
    </Canvas>
  );
}
