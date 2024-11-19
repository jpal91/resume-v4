import GridBackground from "@/components/GridBackground";
import { HeroTyping, NextButton } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className="w-full h-full">
        <GridBackground>
          <div className="w-screen h-screen flex flex-col flex-wrap p-2 content-center justify-center relative">
            <div className="max-w-prose w-full h-auto mockup-window bg-secondary dark:bg-slate-800 border shadow-xl">
              <div className="bg-slate-900 dark:bg-black py-4 px-6 flex flex-col gap-2">
                <HeroTyping />
              </div>
            </div>
            <NextButton />
          </div>
        </GridBackground>
        <div className="w-full h-screen relative">
          <div id="section-2-intersect" className="absolute top-1/2 left-1/2" />
        </div>
      </div>
    </main>
  );
}
