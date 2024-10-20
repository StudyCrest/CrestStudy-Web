import { faqs } from "@/data/faqs";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <div className="faq-container max-w-4xl mx-auto p-6">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faq;
