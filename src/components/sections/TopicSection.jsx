import React from "react";
import IC_BOOK from "../../assets/icons/ic_book.png";
import IC_NOTEBOOK from "../../assets/icons/ic_notebook.png";
import IC_STUDENT from "../../assets/icons/ic_student.png";
import IC_TESTTOKEN from "../../assets/icons/ic_test_token.png";
export default function TopicSection() {
  return (
    <section className="mt-[45px] mb-[98px]">
      <div className="container mx-auto grid grid-cols-4  gap-[15px]">
        <div className="bg-topicgray flex-center flex-col w-full space-y-1 rounded-[10px] ">
          <a
            href="/"
            className="w-full pt-[54px] pb-[49px] pl-[66px] pr-[60px] flex-center flex-col space-y-3 rounded-lg cursor-pointer select-none hover:bg-white hover:shadow-cardTopic transition-base"
          >
            <img
              className="w-[66px] h-[85px] mb-[22px]"
              src={IC_BOOK}
              alt="ic_book"
            />
            <span className="text-violet text-2xl font-medium leading-9">
              1500+ Topic
            </span>
            <span className="font-normal text-gray leading-6 text-base">
              Learn Anythings
            </span>
          </a>
        </div>
        <div className="bg-topicgray flex-center flex-col w-full space-y-1 rounded-[10px] ">
          <a
            href="/"
            className="w-full pt-[54px] pb-[49px] pl-[66px] pr-[60px] flex-center flex-col space-y-3 rounded-lg cursor-pointer select-none hover:bg-white hover:shadow-cardTopic transition-base"
          >
            <img
              className="w-[66px] h-[85px] mb-[22px]"
              src={IC_STUDENT}
              alt="ic_student"
            />
            <span className="text-violet text-2xl font-medium leading-9">
              1800+ Students
            </span>
            <span className="font-normal text-gray leading-6 text-base">
              Learn Anythings
            </span>
          </a>
        </div>
        <div className="bg-topicgray flex-center flex-col w-full space-y-1 rounded-[10px] ">
          <a
            href="/"
            className="w-full pt-[54px] pb-[49px] pl-[66px] pr-[60px] flex-center flex-col space-y-3 rounded-lg cursor-pointer select-none hover:bg-white hover:shadow-cardTopic transition-base"
          >
            <img
              className="w-[66px] h-[85px] mb-[22px]"
              src={IC_TESTTOKEN}
              alt="ic_test_token"
            />
            <span className="text-violet text-2xl font-medium leading-9">
              9K+ Test Token
            </span>
            <span className="font-normal text-gray leading-6 text-base">
              Learn Anythings
            </span>
          </a>
        </div>
        <div className="bg-topicgray flex-center flex-col w-full space-y-1 rounded-[10px] ">
          <a
            href="/"
            className="w-full pt-[54px] pb-[49px] pl-[66px] pr-[60px] flex-center flex-col space-y-3 rounded-lg cursor-pointer select-none hover:bg-white hover:shadow-cardTopic transition-base"
          >
            <img
              className="w-[66px] h-[85px] mb-[22px]"
              src={IC_NOTEBOOK}
              alt="ic_notebook"
            />
            <span className="text-violet text-2xl font-medium leading-9">
              2000+ Student
            </span>
            <span className="font-normal text-gray leading-6 text-base">
              Learn Anythings
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
