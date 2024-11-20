import LayoutGrid, { type Card } from "./LayoutGrid";
import SectionTitle from "./SectionTitle";

type SchoolInfo = {
  school: string;
  time: string;
  degree: string;
};

const CardContent = ({ school, time, degree }: SchoolInfo) => {
  return (
    <div className="w-full h-full flex flex-col justify-end prose text-primary">
      <h2 className="text-3xl">{school}</h2>
      <h3 className="font-bold">{degree}</h3>
      <p className="font-bold">{time}</p>
    </div>
  );
};

const cards: Card[] = [
  {
    id: 1,
    content: (
      <CardContent
        school="University of Arizona"
        time="Aug, 2023 - Current"
        degree="Applied Computing"
      />
    ),
    className: "md:col-span-2",
    thumbnail: "/ua.svg",
  },
  {
    id: 2,
    content: (
      <CardContent
        school="Appalachian State University"
        time="Aug, 2009 - Dec 2013"
        degree="Economics"
      />
    ),
    className: "",
    thumbnail: "/app_state.svg",
  },
];

const Education = () => {
  return (
    <div className="w-full max-w-8xl mx-auto relative h-full flex justify-center items-center">
      <SectionTitle title="education" id={3} />
      <div className="w-full max-w-3xl relative py-20 h-3/4">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
};

export default Education;
