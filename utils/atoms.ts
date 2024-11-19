import { atom } from "jotai";

const heroPhaseAtom = atom(1);
const heroTypingPhaseAtom = atom(0);

const sectionAtom = atom(1);

const selectedSkillAtom = atom<string | null>(null);

export { heroTypingPhaseAtom, heroPhaseAtom, sectionAtom, selectedSkillAtom };
