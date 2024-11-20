"use client";
import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { sectionAtom } from "@/utils/atoms";

const Observer = () => {
  const observerRef = useRef<IntersectionObserver | undefined>();
  const [section, setSection] = useAtom(sectionAtom);

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

    const ele = document.getElementById("section-2");
    ele && o.observe(ele);
    observerRef.current = o;

    return () => {
      ele && o.unobserve(ele);
    };
  }, []);

  return <></>;
};

export default Observer;
