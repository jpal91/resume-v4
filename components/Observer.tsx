"use client";
import { useEffect, useRef } from "react";
import { useSetAtom } from "jotai";
import { sectionAtom } from "@/utils/atoms";

const SECTIONS = 3;

const updateObserve = (observer: IntersectionObserver, observe = true) => {
  for (let i = 1; i < SECTIONS + 1; i++) {
    const element = document.getElementById(`section-${i}`);

    if (element) {
      if (observe) {
        observer.observe(element);
      } else {
        observer.unobserve(element);
      }
    }
  }
};

const Observer = () => {
  const observerRef = useRef<IntersectionObserver | undefined>();
  const setSection = useSetAtom(sectionAtom);

  useEffect(() => {
    const o = new IntersectionObserver((entries) => {
      let s = "";
      for (const ent of entries) {
        if (ent.isIntersecting) {
          s = ent.target.id.slice(-1);
          break;
        }
      }
      setSection(Number(s) || 1);
    });

    // const ele = document.getElementById("section-2");
    // ele && o.observe(ele);
    updateObserve(o);
    observerRef.current = o;

    return () => {
      updateObserve(o, false);
      // ele && o.unobserve(ele);
    };
  }, []);

  return <></>;
};

export default Observer;
