// https://animata.design/docs/widget/score-board
"use client";
import { useAtomValue } from "jotai";
import { selectedSkillAtom } from "@/utils/atoms";
import cn from "@/utils/cn";
import BarChart from "./BarChart";
import { SkillItem } from "./components";
import { useEffect, useState } from "react";

interface ScoreBoardProps {
  items: {
    progress: number;
    label: string;
    className?: string;
    containerClassName?: string;
  }[];
}

export const testScoreBoardProps: ScoreBoardProps = {
  items: [
    {
      label: "A",
      progress: 10,
      className: "rounded-md bg-red-500",
    },
    {
      label: "B",
      progress: 20,
      className: "rounded-md bg-red-500",
    },
    {
      label: "C",
      progress: 30,
      className: "rounded-md bg-orange-500",
    },
    {
      label: "D",
      progress: 40,
      className: "rounded-md bg-orange-500",
    },
    {
      label: "E",
      progress: 50,
      className: "rounded-md bg-green-500",
    },
    {
      label: "F",
      progress: 60,
      className: "rounded-md bg-green-500",
    },
    {
      label: "G",
      progress: 70,
      className: "rounded-md bg-purple-500",
    },
    {
      label: "H",
      progress: 80,
      className: "rounded-md bg-purple-500",
    },
    // {
    //   label: "I",
    //   progress: 90,
    //   className: "rounded-md bg-green-500",
    // },
    // {
    //   label: "J",
    //   progress: 100,
    //   className: "rounded-md bg-green-500",
    // },
  ],
};

const levels: { [key: number]: string } = {
  0: "What's That?",
  1: "Getting Better",
  2: "I've got this",
  3: "I literally wrote this",
};

const levelColors: { [key: number]: string } = {
  0: "text-error",
  1: "text-warning",
  2: "text-success",
  3: "text-purple-500",
};

export default function ScoreBoard({ items }: { items: SkillItem[] }) {
  const selected = useAtomValue(selectedSkillAtom);
  const [{ name, level, icon }, setNameLevel] = useState<SkillItem>({
    icon: <></>,
    name: "Any",
    level: 0,
  });
  const [bars, setBars] = useState<ScoreBoardProps["items"]>(
    testScoreBoardProps.items,
  );

  useEffect(() => {
    const item = items.find((i) => i.name === selected);
    if (item) {
      setNameLevel(item);
      setBars(
        testScoreBoardProps.items.map((b) => ({
          ...b,
          className:
            b.progress > 20 * (item.level + 1)
              ? b.className + " opacity-50"
              : b.className,
        })),
      );
    }
  }, [selected]);

  return (
    <div className="flex flex-col gap-7 justify-center">
      <div className="flex gap-2 pl-2 items-center">
        <h2 className="text-3xl font-bold">{name}</h2>
        {icon}
      </div>
      <div className="group flex h-auto w-64 flex-col justify-evenly rounded-3xl border bg-background p-4 shadow-sm shadow-black/15 transition-all duration-700 dark:border-zinc-700">
        <p className="text-base text-foreground">
          Status:
          <span className={cn(["font-semibold", levelColors[level]])}>
            {" "}
            {levels[level]}{" "}
          </span>
        </p>
        <div className="w-full flex-1 mt-auto">
          <BarChart height={90} items={bars} />
        </div>
      </div>
    </div>
  );
}
