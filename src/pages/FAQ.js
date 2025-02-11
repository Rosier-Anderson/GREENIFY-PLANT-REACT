import React from "react";
import { RxCross2 } from "react-icons/rx";
import "../styles/faq.css";

export default function FAQ() {
  const faqList = [
    {
      question: "My flowers are failling off or dying?",
      answer:
        "Plants are easy way to add color energy and tranmsform yourspace but witch planet is for you. Choosing the right plant.",
    },
    {
      question: "What causes leaves to become pale?",
      answer:
        "Plants are easy way to add color energy and tranmsform yourspace but witch planet is for you. Choosing the right plant. ",
    },
    {
      question: "What causes browwn crispy leaves?",
      answer:
        "Plants are easy way to add color energy and tranmsform yourspace but witch planet is for you. Choosing the right plant.",
    },
    {
      question: "How do i choose a plant?",
      answer:
        "Plants are easy way to add color energy and tranmsform yourspace but witch planet is for you. Choosing the right plant.",
    },
    {
      question: "How do i change the pots?",
      answer:
        "Plants are easy way to add color energy and tranmsform yourspace but witch planet is for you. Choosing the right plant. ",
    },
    {
      question: "Why are gnats flying around my plants?",
      answer:
        "Plants are easy way to add color energy and tranmsform yourspace but witch planet is for you. Choosing the right plant.",
    },
  ];
  return (
    <div className="accordion-container">
      <h2 className="accordion-title">
        Some common questions <br /> were often asked0
      </h2>

      <div className="question-wrapper"> 
        {faqList.map((item, index) => (
          <div className="question-wrapper" key={index}>
            <div className="questions-item">
              <header className="questions-header">
                <RxCross2 className="questions-icon inline" />
                <h4 className="questions-title inline">{item.question}</h4>
              </header>
              <div className="questions-content">
                <p className="questions-description">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
