"use client";

import StarIcon from "@/assets/icons/star.svg";
import { motion } from "motion/react";
import { Fragment } from "react";

const TapeSection = () => {
  const tapeItems = [
    "Frontend Developer",
    "Tech Enthuasist",
    "Software Engineer",
    "Open Source Contributor",
    "Next.js Expert",
    "Web App Architect",
    "Future DevOps Engineer",
    "Code & Coffee Addict",
  ];

  return (
    <div className="py-16 overflow-x-clip">
      <div className="inline-flex items-center gap-2 bg-white/15  py-3 font-semibold uppercase text-sm  text-gray-300  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div className="flex flex-none">
          {[
            ...new Array(2).fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {tapeItems.map((item) => (
                  <div key={item} className="inline-flex gap-2 items-center">
                    <span>{item}</span>
                    <StarIcon />
                  </div>
                ))}
              </Fragment>
            )),
          ]}
        </motion.div>
      </div>
    </div>
  );
};

export default TapeSection;
