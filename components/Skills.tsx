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

const Skills = () => {
  return (
    <div className="flex flex-wrap w-full justify-evenly p-2">
      {/*<div className="card h-fit p-6 flex-col self-center gap-2 bg-slate-800 text-white text-xl lg:text-2xl font-bold font-mono">
        <p>
          <span className="text-accent">assert </span>
          skills
        </p>
        <p>
          <span className="text-accent">assert </span>
          <span className="text-info">len</span>
          <span className="text-warning">(</span>
          skills
          <span className="text-warning">)</span>
          <span className="text-info">{" > "}</span>0
        </p>
        <p>
          <span className="text-accent">assert </span>
          skills<span className="text-info"> == </span>pays_bills
        </p>
      </div> */}
      <SkillsReadOut />
      <div className="">
        <OrbitingItems
          radius={50}
          pauseOnHover={true}
          // paused={true}
          className="w-80 h-80"
          items={[
            { icon: <ReactOriginal size={32} />, name: "React" },
            { icon: <TailwindcssOriginal size={32} />, name: "TailwindCSS" },
            { icon: <GithubOriginal size={32} />, name: "GitHub" },
            { icon: <DockerOriginal size={32} />, name: "Docker" },
            { icon: <NextjsOriginal size={32} />, name: "NextJS" },
            { icon: <BashOriginal size={32} />, name: "Bash" },
            { icon: <PythonOriginal size={32} />, name: "Python" },
            { icon: <UbuntuOriginal size={32} />, name: "Ubuntu" },
            { icon: <JavascriptOriginal size={32} />, name: "JavaScript" },
            { icon: <TypescriptOriginal size={32} />, name: "TypeScript" },
            { icon: <TerraformOriginal size={32} />, name: "Terraform" },
            { icon: <MongodbOriginal size={32} />, name: "MongoDB" },
            { icon: <GitOriginal size={32} />, name: "git" },
            { icon: <MysqlOriginal size={32} />, name: "MySQL" },
            {
              icon: <AmazonwebservicesOriginalWordmark size={32} />,
              name: "AWS",
            },
            { icon: <LinuxOriginal size={32} />, name: "Linux" },
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
