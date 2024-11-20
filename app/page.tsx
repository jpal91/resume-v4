import GridBackground from "@/components/GridBackground";
import { HeroTyping, NextButton } from "@/components/Hero";
import Skills from "@/components/Skills";
import Observer from "@/components/Observer";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <main>
      <Observer />
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
        <div
          id="sect-2"
          className="w-full h-screen relative flex flex-col flex-wrap content-center items-center justify-center"
        >
          <div id="section-2" className="absolute top-1/2 left-1/2" />
          <Skills />
        </div>
      </div>
    </main>
  );
}
