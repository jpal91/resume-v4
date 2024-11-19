"use client";
import { useAtomValue } from "jotai";
import { selectedSkillAtom } from "@/utils/atoms";

const SkillsReadOut = () => {
  const selected = useAtomValue(selectedSkillAtom);

  return (
    <div className="card h-fit w-80 p-6 flex-col self-center gap-2 bg-slate-800 text-white text-xl lg:text-2xl font-bold font-mono">
      <p>Experienced in</p>
      <p className="text-warning">
        {selected || <span className="text-warning/60">Make Selection...</span>}
      </p>
    </div>
  );
};

export default SkillsReadOut;
