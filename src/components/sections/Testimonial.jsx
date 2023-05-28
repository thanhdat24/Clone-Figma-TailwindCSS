import React from "react";
import TESTIMONIAL from "../../assets/images/testimonial.png";

export default function Testimonial() {
  return (
    <section className="mb-[81px]">
      <div className="container mx-auto">
        <h1 className="text-4xl leading-[54px] font-bold text-black text-center !mb-[62px]">
          Testimonial
        </h1>
        <div className=" grid grid-flow-row-dense grid-cols-10 grid-rows-">
          <div className="col-span-4 flex-end  max-w-md">
            <img
              className="w-[120px] h-[120px]"
              src={TESTIMONIAL}
              alt="image"
            />
          </div>
          <div className="col-span-6 max-w-[590px]">
            <span className="text-black leading-[30px] font-normal">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
