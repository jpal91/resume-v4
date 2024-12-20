// https://ui.aceternity.com/components/grid-and-dot-backgrounds
import type { ReactNode } from "react";

const GridBackground = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="h-full w-full bg-base-300 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};

export default GridBackground;
