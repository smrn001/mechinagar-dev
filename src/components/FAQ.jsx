import  { useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce"; // Import lodash debounce for optimization

const questions = [
  {
    question: "Who can join the community?",
    answer:
      "Anyone interested in technology and development, regardless of their experience level, is welcome to join our community.",
  },
  {
    question: "How often do you host events?",
    answer:
      "We typically host events, workshops, or meetups at least once a month. Check our social media channels for the latest updates.",
  },
  {
    question: "Are there any membership fees?",
    answer:
      "No, joining our community is completely free. Some special events or workshops might have a nominal fee to cover costs.",
  },
  {
    question: "How can I contribute to the community?",
    answer:
      "You can contribute by sharing your knowledge, participating in discussions, helping with event organization, or mentoring other members.",
  },
  {
    question: "How can I stay updated about community activities?",
    answer:
      "Follow us on our social media channels and join our Discord server for real-time updates. We also send out a monthly newsletter to all registered members.",
  },
  {
    question:
      "I have interest in tech but don't want to code, can I be a part of your community?",
    answer:
      "Absolutely! Our community welcomes everyone interested in technology, not just coders. There are many exciting roles in tech beyond programming, such as project management, design, content creation, community management, and more. Your unique perspective and interests can contribute greatly to our diverse community!",
  },
  {
    question: "What programming languages do you focus on?",
    answer:
      "We cover a wide range of languages and technologies, including but not limited to JavaScript, Python, Java, C/C++, and web development frameworks. Our focus adapts to the interests and needs of our community members.",
  },
  {
    question: "Do you offer mentorship programs?",
    answer:
      "Yes, we have informal mentorship opportunities where experienced members can guide newcomers. We're always looking for ways to facilitate knowledge sharing within our community.",
  },
];

const FAQ = () => {
  const [columns, setColumns] = useState([[], [], []]);
  const containerRef = useRef(null);

  const distributeItems = () => {
    const columnHeights = [0, 0, 0];
    const cols = [[], [], []];

    questions.forEach((item) => {
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      cols[shortestColumn].push(item);
      columnHeights[shortestColumn] +=
        item.question.length + item.answer.length;
    });

    setColumns(cols);
  };

  // Use debounce to optimize the resize event
  const debouncedDistributeItems = debounce(distributeItems, 300);

  useEffect(() => {
    distributeItems(); // Initial distribution
    window.addEventListener("resize", debouncedDistributeItems);
    return () => window.removeEventListener("resize", debouncedDistributeItems);
  }, [debouncedDistributeItems]);

  return (
    <div className="flex flex-col p-4 gap-2 items-center">
      <h1 className="text-3xl font-semibold sm:text-4xl mt-4">
        Frequently Asked Questions
      </h1>
      <p className="mb-4">
        <a href="#contact" className=" hover:underline">
          Contact us
        </a>{" "}
        if you have any more questions.
      </p>
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-8">
            {column.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="p-4 rounded-lg shadow-md flex flex-col items-start border border-gray-300 gap-4 transition-transform duration-300 hover:shadow-lg hover:translate-y-1"
              >
                <h3 className="text-xl font-semibold ">
                  {item.question}
                </h3>
                <p className="text-justify ">{item.answer}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
