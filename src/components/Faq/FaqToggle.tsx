import { useState } from "react";

const FaqToggle = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`faq-item border mb-4 rounded-lg ${
        isOpen
          ? "bg-studycrest-15 border-studycrest-16"
          : "bg-white border-studycrest-14"
      }`}
    >
      <div
        className="faq-question flex justify-between items-center p-4 cursor-pointer rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          className={`text-studycrest-13 w-[75%] sm:w-full ${
            isOpen ? "font-semibold" : "font-normal"
          } text-lg sm:leading-[20.16px] text-left`}
        >
          {question}
        </h3>
        <span
          className={`text-xl ${
            isOpen
              ? "bg-studycrest-primary text-white"
              : "bg-studycrest-17 text-studycrest-18"
          } w-[62px] h-[62px] flex justify-center items-center rounded-full`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div
        className={`faq-answer overflow-hidden transition-all duration-300 text-left ${
          isOpen ? "max-h-52 p-4" : "max-h-0"
        }`}
      >
        <p className="text-studycrest-13 text-[15px] sm:text-base font-normal leading-[27.52px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqToggle;
