import  { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const questions = [
  {
    question: "Who can join the community?",
    answer: "Anyone interested in technology and development, regardless of their experience level, is welcome to join our community.",
  },
  {
    question: "How often do you host events?",
    answer: "We typically host events, workshops, or meetups at least once a month. Check our social media channels for the latest updates.",
  },
  {
    question: "Are there any membership fees?",
    answer: "No, joining our community is completely free. Some special events or workshops might have a nominal fee to cover costs.",
  },
  {
    question: "How can I contribute to the community?",
    answer: "You can contribute by sharing your knowledge, participating in discussions, helping with event organization, or mentoring other members.",
  },
  {
    question: "How can I stay updated about community activities?",
    answer: "Follow us on our social media channels and join our Discord server for real-time updates. We also send out a monthly newsletter to all registered members.",
  },
  {
    question: "I have interest in tech but don't want to code, can I be a part of your community?",
    answer: "Absolutely! Our community welcomes everyone interested in technology, not just coders. There are many exciting roles in tech beyond programming, such as project management, design, content creation, community management, and more. Your unique perspective and interests can contribute greatly to our diverse community!",
  },
  {
    question: "What programming languages do you focus on?",
    answer: "We cover a wide range of languages and technologies, including but not limited to JavaScript, Python, Java, C/C++, and web development frameworks. Our focus adapts to the interests and needs of our community members.",
  },
  {
    question: "Do you offer mentorship programs?",
    answer: "Yes, we have informal mentorship opportunities where experienced members can guide newcomers. We're always looking for ways to facilitate knowledge sharing within our community.",
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex  flex-col p-6 gap-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mt-4 text-gray-800">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-gray-600 mb-8">
        <span>Contact us</span> if you have any more questions.
      </p>
      <div className="flex flex-col gap-6">
        {questions.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleExpand(index)}
            className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-700">
                {item.question}
              </h3>
              <span className="text-gray-500">
                {expandedIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-4 text-gray-600 text-justify">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;