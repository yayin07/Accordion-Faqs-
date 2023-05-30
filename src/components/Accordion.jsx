import React, { useState } from "react";
//import { RxDotFilled } from "react-icons/rx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Accordion = ({ question, answer, answer1, answer2, dot }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div onClick={() => setIsActive(!isActive)}>
        <div>
          {isActive ? (
            <div className="ans py-3 rounded-lg pl-4 pr-4 border-2 shadow-md shadow-gray-400 text-white ">
              <div className="flex justify-between items-center ">
                {question}
                <div className=" pl-8">
                  <FiChevronUp />
                </div>
              </div>
            </div>
          ) : (
            <div className="faqs rounded-lg py-3 pl-4 pr-4 border-2 shadow-md shadow-gray-400 ease-in">
              <div className="flex justify-between items-center">
                {question}
                <div className=" pl-8">
                  <FiChevronDown />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isActive && (
        <div>
          <ul className="list pl-4 pt-3 pb-3">
            <li>
              <div>
                <div className="flex">
                  <div className="pt-1">{dot}</div>
                  <p>{answer}</p>
                </div>

                <div className="flex ">
                  <p className="pl-4">{answer1}</p>
                </div>

                <div className="flex ">
                  <p className="pl-4"> {answer2}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
