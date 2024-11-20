import { ReactNode } from "react";
import OrbitingItems from "./OrbitingItems";
import SkillsReadOut from "./SkillsReadout";
import {
  ReactOriginal,
  TailwindcssOriginal,
  GithubOriginal,
  DockerOriginal,
  NextjsOriginal,
  BashOriginal,
  PythonOriginal,
  UbuntuOriginal,
  JavascriptOriginal,
  TypescriptOriginal,
  TerraformOriginal,
  MongodbOriginal,
  GitOriginal,
  MysqlOriginal,
  AmazonwebservicesOriginalWordmark,
  LinuxOriginal,
} from "devicons-react";
import type { SkillItem } from "./components";
import ScoreBoard from "./ScoreBoard";

const items: SkillItem[] = [
  { icon: <ReactOriginal size={32} />, name: "React", level: 2 },
  { icon: <TailwindcssOriginal size={32} />, name: "TailwindCSS", level: 2 },
  { icon: <GithubOriginal size={32} />, name: "GitHub", level: 1 },
  { icon: <DockerOriginal size={32} />, name: "Docker", level: 1 },
  { icon: <NextjsOriginal size={32} />, name: "NextJS", level: 2 },
  { icon: <BashOriginal size={32} />, name: "Bash", level: 1 },
  { icon: <PythonOriginal size={32} />, name: "Python", level: 2 },
  { icon: <UbuntuOriginal size={32} />, name: "Ubuntu", level: 2 },
  { icon: <JavascriptOriginal size={32} />, name: "JavaScript", level: 2 },
  { icon: <TypescriptOriginal size={32} />, name: "TypeScript", level: 2 },
  { icon: <TerraformOriginal size={32} />, name: "Terraform", level: 1 },
  { icon: <MongodbOriginal size={32} />, name: "MongoDB", level: 1 },
  { icon: <GitOriginal size={32} />, name: "git", level: 1 },
  { icon: <MysqlOriginal size={32} />, name: "MySQL", level: 1 },
  {
    icon: <AmazonwebservicesOriginalWordmark size={32} />,
    name: "AWS",
    level: 1,
  },
  { icon: <LinuxOriginal size={32} />, name: "Linux", level: 1 },
];

const Skills = () => {
  return (
    <div className="flex flex-wrap w-full justify-evenly gap-4 bg-base-100 rounded-xl shadow-xl max-w-4xl p-2">
      <ScoreBoard items={items} />
      <div className="">
        <OrbitingItems
          radius={50}
          pauseOnHover={true}
          paused={true}
          className="w-80 h-80"
          items={items}
        />
      </div>
    </div>
  );
};

export default Skills;
