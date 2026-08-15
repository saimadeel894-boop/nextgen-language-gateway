import { ClientOnly } from "@tanstack/react-router";
import { Suspense, lazy, useEffect, useState } from "react";

import type { SceneVariant } from "@/components/site/three/abstract-scene";

const AbstractScene = lazy(() => import("@/components/site/three/abstract-scene"));

function useCanRender3D() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 640px)").matches;
    let webgl = false;
    try {
      const canvas = document.createElement("canvas");
      webgl = Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
    } catch {
      webgl = false;
    }
    setOk(webgl && !reduced && !small);
  }, []);
  return ok;
}

function Scene({ variant }: { variant: SceneVariant }) {
  const canRender = useCanRender3D();
  if (!canRender) return null;
  return (
    <Suspense fallback={null}>
      <AbstractScene variant={variant} />
    </Suspense>
  );
}

/**
 * Decorative WebGL layer. Renders only in the browser, only with WebGL support,
 * and never for reduced-motion users or small screens.
 */
export function Scene3D({
  variant = "hero",
  className = "",
}: {
  variant?: SceneVariant;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <ClientOnly fallback={null}>
        <Scene variant={variant} />
      </ClientOnly>
    </div>
  );
}
