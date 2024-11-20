import SectionTitle from "./SectionTitle";
import IconCloud from "./IconCloud";

const Skills = () => {
  return (
    <div className="w-full max-w-8xl mx-auto relative h-full flex justify-center items-center">
      <SectionTitle title="skills" id={2} />
      <div className="w-full max-w-3xl relative">
        <IconCloud />
      </div>
    </div>
  );
};

export default Skills;
