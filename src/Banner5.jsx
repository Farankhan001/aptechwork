import React, { useState, useEffect, useRef } from "react";
import './App.css';

function Banner5() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqRef = useRef(null);

  const faqs = [
    { question: "Why is McDonald's® Canada taking questions about its food?", answer: "We want to provide transparency and address customer concerns." },
    { question: "How does this Q&A work?", answer: "You can submit questions, and we’ll provide answers for common inquiries." },
    { question: "Why do I have to sign in through Facebook or Twitter to ask my question?", answer: "This helps us ensure real people are asking questions." },
    { question: "Why can only people in Canada ask questions?", answer: "This program is currently limited to Canada for logistical reasons." },
    { question: "What should I do if I'm not satisfied with my answer?", answer: "Please reach out to our support for further clarification." },
    { question: "Why was my question rejected?", answer: "Some questions may not meet the program's guidelines or terms." },
    { question: "Who’s actually answering all these questions?", answer: "Our team of experts and staff respond to submitted questions." },
    { question: "How many questions have you answered?", answer: "We’ve answered hundreds of questions so far!" },
    { question: "Who can I talk to if I have a question, complaint or need technical support for this program?", answer: "You can contact our customer support team for assistance." },
    { question: "How can I get my question removed?", answer: "Reach out to us directly, and we will address your request." },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="faq-container" ref={faqRef}>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-grid slide-left-animation zoom-on-scroll ">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
            <div className={`faq-question ${activeIndex === index ? "active" : ""}`}>
              {faq.question} <span className="plus-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner5;
