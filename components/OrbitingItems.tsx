// Variation of https://animata.design/docs/list/orbiting-items
"use client";
import { useEffect, useState, type ReactNode } from "react";
import { useAtomValue, useSetAtom, useAtom } from "jotai";
import {
  sectionAtom,
  selectedSkillAtom,
  pauseAtom,
  Paused,
} from "@/utils/atoms";
import cn from "@/utils/cn";
import { Pause } from "lucide-react";
import { SkillItem } from "./components";

interface OrbitingItemsProps {
  /**
   * The radius of the circle in percentage, relative to the container.
   */
  radius: number;

  /**
   * The items to orbit around the center of the parent element.
   */
  items: SkillItem[];

  /**
   * Pause the animation when the parent element is hovered.
   */
  pauseOnHover?: boolean;

  paused?: boolean;

  /**
   * Class name for the background element.
   */
  backgroundClassName?: string;

  /**
   * Class name for the container element.
   */
  containerClassName?: string;

  /**
   * Additional classes for the item container.
   */
  className?: string;
}

const calculateItemStyle = ({
  index,
  radius,
  totalItems,
}: {
  radius: number;
  index: number;
  totalItems: number;
}) => {
  const angle = (index / totalItems) * 360;
  const radians = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);
  return {
    left: `${50 + x}%`,
    top: `${50 + y}%`,
    transform: "translate(-50%, -50%)",
  };
};

export default function OrbitingItems({
  radius = 50,
  items,
  pauseOnHover,
  paused,
  containerClassName,
  className,
}: OrbitingItemsProps) {
  // The idea is to distribute the items in a circle around the center of the parent element.
  // Then the whole parent element rotates around its center.
  // The items rotate in the opposite direction to the parent element so they appear to be stationary.
  const section = useAtomValue(sectionAtom);
  const setSelected = useSetAtom(selectedSkillAtom);
  const [rendered, setRendered] = useState(false);
  const [indices, setIndices] = useState([0, 1, 2, 3, 4]);
  // const [pause, setPause] = useState(true);
  const [pause, setPause] = useAtom(pauseAtom);
  const icons = items.map(({ icon }, i) => <>{icon}</>);

  useEffect(() => {
    const idxs = [];

    for (let i = 0; i < 5; i++) {
      idxs.push(i % items.length);
    }

    if (paused) {
      setPause(Paused.PermOn);
    } else {
      setPause(Paused.PermOff);
    }

    setIndices(idxs);
    setRendered(true);
  }, []);

  useEffect(() => {
    setPause(rendered && section === 2 ? Paused.ScrollOff : Paused.ScrollOn);
    // setPause(paused || !rendered || section !== 2);
  }, [rendered, paused, section]);

  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      setIndices((idxs) => {
        return idxs.map((i) => (i + 5) % items.length);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [pause]);

  const reverse = cn(
    "animate-[rotate-full_45s] ease-linear direction-reverse repeat-infinite",
    pause && "[animation-play-state:paused]",
  );

  const handleSelect = (name: string) => {
    // setPause(true);
    setPause(Paused.HoverOn);
    setSelected(name);
  };

  const handleLeave = () => {
    // setSelected(null);
    // setPause(!paused && rendered && section === 2);
    setPause(Paused.HoverOff);
  };

  return (
    <div
      className={cn(
        "storybook-fix group/orbit flex items-center justify-center py-32 relative",
        containerClassName,
      )}
    >
      <div
        className={cn(
          "relative flex h-64 w-64 animate-[rotate-full_45s] items-center justify-center ease-linear repeat-infinite",
          pause && "[animation-play-state:paused]",
          className,
        )}
      >
        <div className="absolute h-full w-full rounded-full border-2 border-gray-500" />
        {rendered &&
          indices.map((idx, index) => {
            return (
              <div
                key={index}
                className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-gray-200"
                style={calculateItemStyle({
                  index,
                  radius,
                  totalItems: 5,
                })}
                onMouseOver={() => handleSelect(items[idx].name)}
                onMouseLeave={handleLeave}
              >
                <div className={reverse}>{icons[idx]}</div>
              </div>
            );
          })}

        <div
          className={cn(
            "absolute h-1/2 w-1/2 rounded-full border-2 border-gray-700",
            reverse,
          )}
        />
      </div>
      <div
        className={cn([
          "absolute bottom-[10%] left-0 btn btn-sm btn-circle",
          pause && "btn-warning",
        ])}
        onClick={() => setPause(Paused.Perm)}
      >
        <Pause className={pause ? "" : ""} />
      </div>
    </div>
  );
}