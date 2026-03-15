import { NewspaperIcon } from "lucide-react";
import React from "react";
import { bio } from "../data/profile.json";

import ReactMarkDown from "react-markdown";

export default function Bio() {
  return (
    <div>
      <div className=" flex gap-5 items-center font-bold my-8 text-xl">
        <div className="hover:scale-125 hover:ease-linear hover:duration-200  w-12 flex items-center justify-center h-12 rounded-full bg-[#2b80ff4b] ">
          <NewspaperIcon className="text-primary  text-12" size={24} />
        </div>
        Bio
      </div>
      <div className=" text-justify leading-loose">
        <ReactMarkDown skipHtml={false}>{bio.join("\n\n")}</ReactMarkDown>
      </div>
    </div>
  );
}
