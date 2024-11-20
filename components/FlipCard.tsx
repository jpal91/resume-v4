// https://animata.design/docs/card/flip-card
import cn from "@/lib/cn";
import Image from "next/image";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
}

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
  rotate = "y",
  className,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={cn("group h-72 w-56 [perspective:1000px]", className)}
      {...props}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0],
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden] group-hover:-z-10">
          <div className="absolute w-full h-full bg-gradient-to-t from-black/70 to-transparent from-10% to-50% z-10 rounded-2xl pointer-events-none" />
          <Image
            src={"/proj-pics/" + image}
            alt="image"
            fill={true}
            sizes="(min-width: 640px) 500px"
            className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40 z-0"
          />
          <div className="absolute bottom-4 left-4 text-lg font-bold text-white z-20">
            {title}
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]",
            self[1],
          )}
        >
          <div className="flex min-h-full flex-col gap-2 ">
            {subtitle && (
              <h1 className="text-xl font-bold text-white border-b border-b-gray-200 pb-2">
                {subtitle}
              </h1>
            )}
            <p className="text-base font-medium leading-normal text-gray-100 line-clamp-5">
              {description}{" "}
            </p>
            <button className="btn btn-xs btn-outline mt-auto">
              Read More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
