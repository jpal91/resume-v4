"use client";
import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { sectionAtom } from "@/utils/atoms";
import cn from "@/utils/cn";
import HyperText from "./HyperText";

const SectionTitle = ({
  title,
  id,
  className,
}: {
  title: string;
  id: number;
  className?: string;
}) => {
  const [triggered, setTriggered] = useState(false);
  const section = useAtomValue(sectionAtom);

  useEffect(() => {
    if (triggered || section !== id) return;

    const timeout = setTimeout(() => {
      setTriggered(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [section]);

  return (
    <div className="absolute top-5 left-5 divider divider-start w-11/12">
      <div
        className={cn([" rounded-lg px-4 flex items-center gap-2", className])}
      >
        <span className="text-purple-700 dark:text-accent font-mono text-xl font-bold py-2">
          assert
        </span>
        {triggered ? (
          <HyperText text={title} className="text-xl font-bold" />
        ) : (
          <div className="opacity-0 text-xl font-mono font-bold py-2">
            {title.toUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
