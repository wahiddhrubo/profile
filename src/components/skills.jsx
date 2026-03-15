import { NewspaperIcon, Stars } from "lucide-react";
import React from "react";
import { skills } from "../data/profile.json";

export default function Skills() {
  return (
    <div>
      <div className=" flex gap-5 items-center font-bold my-8 text-xl">
        <div className="hover:scale-125 hover:ease-linear hover:duration-200  w-12 flex items-center justify-center h-12 rounded-full bg-[#2b80ff4b] ">
          <Stars className="text-primary  text-12" size={24} />
        </div>
        Technical Skills
      </div>
      <div>
        {skills.map((skill) => (
          <>
            <div className="my-6 text-justify leading-relaxed  text-base  dark:text-white ">
              <strong className="text-primary  ">{skill.category} </strong> :{" "}
              {skill.skills}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
