import React from "react";
import Intro from "../../assets/images/intro.png";
import Button from "../Button";
export default function HeroSection() {
  return (
    <section className="bg-secondary">
      <div className="flex justify-between container mx-auto pb-[60px]">
        <div className="max-w-[410px] mt-6">
          <span className="text-orange font-normal text-base leading-4 mb-[10px]">
            Are you ready to Learn?
          </span>
          <div className="text-black font-bold text-5xl leading-[70px] mb-[19px]">
            Learn With fun on <span className="text-primary">any schedule</span>
          </div>
          <span className="text-graylight text-base font-normal leading-9 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            blandit facilisis quam netus.
          </span>
          <Button className="border  border-dark shadow  px-9 mt-[26px] ">
            Get Started
          </Button>
        </div>
        <div className="max-w-xl">
          <img className="w-[554px] h-[346px]" src={Intro} alt="intro" />
        </div>
      </div>
    </section>
  );
}
