import React from "react";
import Button from "../Button";
import COURSES1 from "../../assets/images/courses_1.png";
import COURSES2 from "../../assets/images/courses_2.png";
import COURSES3 from "../../assets/images/courses_3.png";
import CALENDAR from "../../assets/icons/ic_calendar.svg";
import PEOPLE from "../../assets/icons/ic_people.svg";
export default function OnlineCoursesSection() {
  return (
    <section className="mb-[81px]">
      <div className="container mx-auto">
        <h1 className="text-4xl leading-[54px] font-bold text-violet text-center !mb-[62px]">
          Online Courses
        </h1>
        <div className="grid grid-cols-3 ">
          <div className="bg-white shadow-cardCourse flex-col w-[370px] h-[483px] space-y-1 rounded-[18px] ">
            <div className="w-[370px] h-[483px] px-5 pt-6 pb-[31px] space-y-3 rounded-lg cursor-pointer select-none hover:bg-white hover:shadow-cardTopic transition-base flex flex-col">
              <img
                className="w-[331px] h-[234px] !mb-[19px]"
                src={COURSES1}
                alt="image"
              />
              <span className="text-violet font-medium text-2xl leading-9 !mb-[3px] !mt-0">
                Modern Psychology
              </span>
              <span className="text-violet font-normal text-base leading-6 !mb-[19px] !mt-0">
                Designation
              </span>
              <Button className="py-2 px-7 w-1/2 !mt-0">Buy Course</Button>
              <div className="flex justify-between mr-[6px] !mt-[34px]">
                <div className="flex">
                  <img
                    className="w-6 h-6  mr-[6px]"
                    src={CALENDAR}
                    alt="icon"
                  />
                  <span className="text-gray text-base leading-6 font-medium">
                    Start 20 April, 2021
                  </span>
                </div>
                <div className="flex">
                  <img className="w-6 h-6 mr-[6px]" src={PEOPLE} alt="icon" />
                  <span className="text-gray text-base leading-6 font-medium">
                    60 seats
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-cardCourse flex-col w-[370px] h-[483px] space-y-1 rounded-[18px] ">
            <div className="w-[370px] h-[483px] px-5 pt-6 pb-[31px] space-y-3 rounded-lg cursor-pointer select-none hover:bg-white hover:shadow-cardTopic transition-base flex flex-col">
              <img
                className="w-[331px] h-[234px] !mb-[19px]"
                src={COURSES1}
                alt="image"
              />
              <span className="text-violet font-medium text-2xl leading-9 !mb-[3px] !mt-0">
                Modern Psychology
              </span>
              <span className="text-violet font-normal text-base leading-6 !mb-[19px] !mt-0">
                Designation
              </span>
              <Button className="py-2 px-7 w-1/2 !mt-0">Buy Course</Button>
              <div className="flex justify-between mr-[6px] !mt-[34px]">
                <div className="flex">
                  <img
                    className="w-6 h-6  mr-[6px]"
                    src={CALENDAR}
                    alt="icon"
                  />
                  <span className="text-gray text-base leading-6 font-medium">
                    Start 20 April, 2021
                  </span>
                </div>
                <div className="flex">
                  <img className="w-6 h-6 mr-[6px]" src={PEOPLE} alt="icon" />
                  <span className="text-gray text-base leading-6 font-medium">
                    60 seats
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-cardCourse flex-col w-[370px] h-[483px] space-y-1 rounded-[18px] ">
            <div className="w-[370px] h-[483px] px-5 pt-6 pb-[31px] space-y-3 rounded-lg cursor-pointer select-none hover:bg-white hover:shadow-cardTopic transition-base flex flex-col">
              <img
                className="w-[331px] h-[234px] !mb-[19px]"
                src={COURSES1}
                alt="image"
              />
              <span className="text-violet font-medium text-2xl leading-9 !mb-[3px] !mt-0">
                Modern Psychology
              </span>
              <span className="text-violet font-normal text-base leading-6 !mb-[19px] !mt-0">
                Designation
              </span>
              <Button className="py-2 px-7 w-1/2 !mt-0">Buy Course</Button>
              <div className="flex justify-between mr-[6px] !mt-[34px]">
                <div className="flex">
                  <img
                    className="w-6 h-6  mr-[6px]"
                    src={CALENDAR}
                    alt="icon"
                  />
                  <span className="text-gray text-base leading-6 font-medium">
                    Start 20 April, 2021
                  </span>
                </div>
                <div className="flex">
                  <img className="w-6 h-6 mr-[6px]" src={PEOPLE} alt="icon" />
                  <span className="text-gray text-base leading-6 font-medium">
                    60 seats
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
