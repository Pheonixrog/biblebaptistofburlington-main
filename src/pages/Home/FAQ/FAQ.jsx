import { HiPlus } from "react-icons/hi2";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

export default function FAQ() {
  const [activeItems, setActiveItems] = useState([]);

  const toggleItem = (index) => {
    setActiveItems((prevActiveItems) => {
      if (prevActiveItems.includes(index)) {
        return prevActiveItems.filter((itemIndex) => itemIndex !== index);
      } else {
        return [...prevActiveItems, index];
      }
    });
  };

  const questions = [
    {
      question: "What will you find when you visit our church?",
      answer:
        "Upon arriving at Bible Baptist, you will be greeted by the very foundation of our church, the congregation. Just as Christ loved those around Him and showed compassion, we will show kindness and compassion regardless your background. You will be guaranteed to hear sound, biblically fiery preaching from the King James Bible by our beloved Pastor Kevin.",
    },
    {
      question: "Where to find sermons?",
      answer:
        'All sermons are livestreamed as part of our services on rumble. If you go to the top right of the page and press "live stream", you can scroll down to see the latest recorded stream or older streams.',
    },
    {
      question: "How to access live stream service?",
      answer:
        'All our services are live streamed on rumble. If you go to the top right of the page and press "live stream", just press the initial black button that says "Click here to view BBC live stream."',
    },
    {
      question: "Where can I see church activities and calendar?",
      answer:
        "On all our pages, the church calendar is embedded towards the bottom part of the page which contains the list of events that the church hosts.",
    },
  ];

  return (
    <section className="py-40">
      <div className="mx-auto max-w-[130rem]">
        <div>
          {/* Heading Section */}
          <div className="text-center mx-auto sm:w-full sm:px-8">
            <h2 className="text-[5.4rem] font-black leading-[110%] sm:text-[3.2rem]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#605757] text-[1.8rem] font-semibold leading-relaxed w-[64.4rem] mx-auto mt-6 sm:text-[1.2rem] sm:w-[90%]">
              Most people have similar questions so we decided to answer them
              afterwards for anyone who&apos;s looking fo similar answers.
            </p>
          </div>

          {/* Questions Section */}
          <div className="flex flex-col w-[60.6rem] mt-24 mx-auto sm:px-8 sm:w-full">
            {questions.map((item, index) => (
              <div
                key={index}
                className="py-8 px-4 border-b border-[#ddd] cursor-pointer"
              >
                <div
                  className="flex items-center justify-between"
                  onClick={() => toggleItem(index)}
                >
                  <p className="text-[1.4rem]">{item.question}</p>
                  <span>
                    {activeItems.includes(index) ? <FiMinus /> : <HiPlus />}
                  </span>
                </div>
                <div
                  className={`${
                    activeItems.includes(index) ? "block" : "hidden"
                  }`}
                >
                  <p className="text-[1.4rem] my-10 leading-[1.8]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
