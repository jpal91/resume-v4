import { atom } from "jotai";

export enum Paused {
  Scroll,
  ScrollOn,
  ScrollOff,
  Hover,
  HoverOn,
  HoverOff,
  Perm,
  PermOn,
  PermOff,
}

const _pauseAtom = atom([false, true, true]);
const pauseAtom = atom(
  (get): boolean => {
    const res = !get(_pauseAtom).every((p) => p);
    console.log(get(_pauseAtom));
    return res;
  },
  (get, set, update: Paused) => {
    const [perm, hover, scroll] = get(_pauseAtom);

    switch (true) {
      case update === Paused.Scroll:
        set(_pauseAtom, [perm, hover, !scroll]);
        break;
      case update === Paused.ScrollOn:
        set(_pauseAtom, [perm, hover, false]);
        break;
      case update === Paused.ScrollOff:
        set(_pauseAtom, [perm, hover, true]);
        break;
      case update === Paused.Hover:
        set(_pauseAtom, [perm, !hover, scroll]);
        break;
      case update === Paused.HoverOn:
        set(_pauseAtom, [perm, false, scroll]);
        break;
      case update === Paused.HoverOff:
        set(_pauseAtom, [perm, true, scroll]);
        break;
      case update === Paused.Perm:
        set(_pauseAtom, [!perm, hover, scroll]);
        break;
      case update === Paused.PermOn:
        set(_pauseAtom, [false, hover, scroll]);
        break;
      case update === Paused.PermOff:
        set(_pauseAtom, [true, hover, scroll]);
        break;
    }
  },
);

const heroPhaseAtom = atom(0);
const heroTypingPhaseAtom = atom(0);

const sectionAtom = atom(1);

const selectedSkillAtom = atom<string | null>(null);

export {
  heroTypingPhaseAtom,
  heroPhaseAtom,
  sectionAtom,
  selectedSkillAtom,
  pauseAtom,
};
