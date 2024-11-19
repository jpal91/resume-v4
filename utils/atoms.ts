import { atom } from "jotai";

const heroPhaseAtom = atom(1);
const heroTypingPhaseAtom = atom(0);

export { heroTypingPhaseAtom, heroPhaseAtom };
