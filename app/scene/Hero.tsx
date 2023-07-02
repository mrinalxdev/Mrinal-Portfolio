"use client";

import Button from "@/components/Button";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  function onChange() {
    console.log("Resume");
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[88vh] px-[5%] select-none">
        <div>
          <h1 className="md:text-[6rem] text-[3rem] upeercase leading-[1.2]">
            <span className="text-gray-500">Full-Stack</span> <span>JS Developer</span> <span className="text-gray-500">&</span>{" "}
            Solidity Developer
          </h1>
        </div>

        <div className="flex md:flex-row flex-col justify-between w-full pt-16">
          <div className="w-[330px] ">
            <p>
              Demonstrating a string ability to collaborate with
              cross-functional teams, communicate effectively, and deliver
              high-quality code within deadlines.
            </p>
          </div>

          <div className="md:w-[500px] w-[370px] flex flex-col gap-6 items-start">
            <p>
              Always being excited about the opportunity to contribute to
              innovative projects and tackle complex challenges using my
              expertise
            </p>
            <Button
              label="Resume"
              onClick={() => {}}
              icon={BsFillArrowRightCircleFill}
              black
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
