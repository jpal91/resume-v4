import Color from "colorjs.io";

const getColorInfo = (oklch: string) => {
  let color = new Color(oklch);
  color = color.to("srgb");

  const luminance = color.luminance;
  const dark = luminance < 0.5;

  return {
    bgHex: color.toString({ format: "hex" }),
    fallbackHex: dark ? "#FFFFFF" : "#000000",
    minContrastRatio: dark ? 2 : 1.2,
  };
};

export default getColorInfo;
