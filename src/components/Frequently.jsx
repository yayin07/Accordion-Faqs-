import React from "react";
import { useState } from "react";
import Accordion from "./Accordion";
import { accordionData } from "../utils/Data";
import { RiSearchLine } from "react-icons/ri";


const Frequently = () => {
  const [faqs, setFaqs] = useState(accordionData);

  const filterFaqs = (e) => {
    const search = e.target.value.toLowerCase();
    const filterFaqs = accordionData.filter((faqs) =>
      faqs.question.toLowerCase().includes(search)
    );
    setFaqs(filterFaqs);
    e.preventDefault();
  };

  return (
    <div className="bg p-2">
      <div className="bg-2 rounded-3xl drop-shadow sm:mx-12 sm:mt-20 sm:mb-20 mt-2 mb-2">
        <div className="font " >
          <div className="pb-6 pt-12 flex justify-center">
            Frequently Asked Questions
          </div>

          <form className="flex justify-center ">
            <input
              type="text"
              onChange={(e) => filterFaqs(e)}
              placeholder="Search Event, Performer,Genre"
              className="input px-4 py-3 w-[680px] drop-shadow-md shadow-black rounded-l-md"
            />
            <button type="submit" className="flex ">
              <div className="search text-white px-4 py-4 rounded-r-md drop-shadow-md shadow-gray-900">
                <RiSearchLine />
              </div>
            </button>
          </form>

          <div className="flex justify-center  ">
            
              <div className="space-y-2 mt-6 mb-6 ">
                {faqs.map  ((faq) => (
                  <Accordion
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    answer1={faq.answer1}
                    answer2={faq.answer2}
                    dot={faq.dot}
                  />
                ))}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
