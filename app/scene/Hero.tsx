"use client";

import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVaraint] = useState("default");

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variant: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(244, 244, 244)",
      mixBlendMode: "difference",
    },
  };
  const textEnter = () => setCursorVaraint("text")
  const textLeave = () => setCursorVaraint("default")

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[88vh] px-[5%] select-none">
        <div>
          <motion.div className="cursor" variants={variant} animate={cursorVariant} />
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="md:text-[6rem] text-[3rem] upeercase leading-[1.2]">
            <span className="text-gray-500">Full-Stack</span>{" "}
            <span>JS Developer</span> <span className="text-gray-500">&</span>{" "}
            Solidity Developer
          </h1>
        </div>

        <div className="flex md:flex-row flex-col justify-between w-full pt-16">
          <div className="w-[330px] ">
            <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
              Demonstrating a strong ability to collaborate with
              cross-functional teams, communicate effectively, and deliver
              high-quality code within deadlines.
            </p>
          </div>

          <div className="md:w-[500px] w-[370px] flex flex-col gap-6 items-start">
            <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
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
