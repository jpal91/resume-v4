"use client";
import { memo, useState, useEffect } from "react";
import {
  Cloud,
  ICloud,
  renderSimpleIcon,
  fetchSimpleIcons,
} from "react-icon-cloud";
import type { SimpleIcon } from "react-icon-cloud";
import getColorInfo from "@/utils/colors";

const cloudProps: Omit<ICloud, "children"> = {
  id: "stable-id-for-csr-ssr",
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "1rem",
      marginRight: "1rem",
    },
  },
  canvasProps: {
    style: {
      maxWidth: "90%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    freezeActive: true,
    freezeDecel: true,
  },
};

const iconList: string[] = [
  "react",
  "nextdotjs",
  "docker",
  "python",
  "ubuntu",
  "linux",
  "nodedotjs",
  "terraform",
  "javascript",
  "typescript",
  "mongodb",
  "github",
  "mysql",
  "postgresql",
  "amazonwebservices",
  "rust",
  "googlechrome",
];

const useIcons = () => {
  const [icons, setIcons] = useState<Record<string, SimpleIcon> | undefined>();
  const [bgColor, setBgColor] = useState<string | undefined>();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconList }).then(({ simpleIcons }) =>
      setIcons(simpleIcons),
    );

    const body = document.querySelector("body");
    if (body) {
      const bg = window
        ?.getComputedStyle(body)
        ?.getPropertyValue("background-color");
      setBgColor(bg);
    }
  }, []);

  if (icons && bgColor) {
    const { bgHex, fallbackHex, minContrastRatio } = getColorInfo(bgColor);

    return Object.values(icons).map((icon, i) => {
      return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        aProps: {
          key: i,
          href: "#",
          onClick: (e) => {
            e.preventDefault();
          },
        },
      });
    });
  }

  return [<a key="load">Loading</a>];
};

const SkillCloud = memo(() => {
  const icons = useIcons();

  return <Cloud {...cloudProps}>{icons}</Cloud>;
});

SkillCloud.displayName = "SkillCloud";

export default SkillCloud;
