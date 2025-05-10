import React from "react";
import Navbar from "./navbar";

const faqs = [
  {
    question: "What is Zeepo?",
    answer: "Zeepo is a platform that connects learners with opportunities to grow and earn through personalized learning and real-world gigs.",
  },
  {
    question: "Is Zeepo free to use?",
    answer: "Yes, Zeepo is free for learners. Some premium courses or services may have additional charges.",
  },
  {
    question: "How can I apply for gigs?",
    answer: "Once you complete relevant courses, you can apply to suggested gigs through the dashboard under 'Suggested Gigs'.",
  },
  {
    question: "How does learning progress work?",
    answer: "Your learning progress is tracked based on completed lessons and quiz scores within each course.",
  },
  {
    question: "Can I become a mentor on Zeepo?",
    answer: "Absolutely! Fill out the mentor application form from the Services page and our team will reach out.",
  },
];

const FAQ = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "32px", textAlign: "center" }}>
          Frequently Asked Questions
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                padding: "24px",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px", color: "#1e3a8a" }}>
                {faq.question}
              </h3>
              <p style={{ fontSize: "14px", color: "#4b5563" }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
