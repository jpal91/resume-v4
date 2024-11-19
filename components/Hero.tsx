"use client";
import { useEffect } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ArrowDown } from "lucide-react";
import TypingText, { type TypingTextProps } from "./Typing";
import { heroPhaseAtom, heroTypingPhaseAtom } from "@/utils/atoms";
import cn from "@/utils/cn";

const heroText: Array<TypingTextProps> = [
  {
    text: "> rm -rf ./old-resume",
    alwaysVisibleCount: 2,
  },
  {
    text: "> curl https://justinthecloud.dev/welcome.sh | sh",
    alwaysVisibleCount: 2,
  },
  {
    text: "█ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █",
    delay: 10,
    cursor: <></>,
    className: "line-clamp-1",
    textClass: "text-primary",
  },
  {
    text: "Welcome to my resume!",
    textClass: "text-accent font-bold",
  },
];

export const NextButton = () => {
  const heroPhase = useAtomValue(heroPhaseAtom);

  return (
    <div className=" absolute bottom-[15%] left-1/2 -translate-x-1/2">
      <button
        className={cn([
          "btn btn-circle btn-neutral opacity-0",
          heroPhase > 0 && "fade-in !transition-all hover:scale-110",
        ])}
        onClick={() =>
          document
            .getElementById("section-2-intersect")
            ?.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      >
        <ArrowDown size={32} className="stroke-accent" />
      </button>
    </div>
  );
};

export const HeroTyping = () => {
  const setHeroPhase = useSetAtom(heroPhaseAtom);
  const [heroTypingPhase, setHeroTypingPhase] = useAtom(heroTypingPhaseAtom);

  useEffect(() => {
    if (heroTypingPhase !== heroText.length) return;
    setHeroPhase((p) => p + 1);
  }, [heroTypingPhase]);

  const nextPhase = () => {
    setTimeout(() => {
      setHeroTypingPhase((p) => p + 1);
    }, 1500);
  };

  return heroText.map((t, i) => (
    <TypingText
      key={i}
      alwaysVisibleCount={0}
      repeat={false}
      hideCursorOnComplete={true}
      // animated={heroTypingPhase >= i}
      animated="show"
      onComplete={nextPhase}
      {...t}
      className={cn(["text-xs md:text-base", t.className])}
      textClass={cn(["text-white", t.textClass])}
    />
  ));
};
