import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const submitAnswers = async (answers) => {
  await fetch("https://formspree.io/f/mbdzzpdl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Himanshi Birthday",
      q1: answers[0],
      q2: answers[1],
      q3: answers[2],
      q4: answers[3],
      q5: answers[4],
      q6: answers[5],
      q7: answers[6],
      q8: answers[7],
      q9: answers[8],
      q10: answers[9],
    }),
  });
};

const questions = [
  {
    text: "Roses or Sunflowers?",
    left: { label: "Roses", img: "/images/rose.jfif" },
    right: { label: "Sunflowers", img: "/images/sunflower.jfif" },
  },
  {
    text: "Partying or Peaceful Garden?",
    left: { label: "Partying", img: "/images/party.jfif" },
    right: { label: "Peaceful Garden", img: "/images/garden.jfif" },
  },
  {
    text: "Foodie or Loves Cooking?",
    left: { label: "Foodie", img: "/images/food.jfif" },
    right: { label: "Loves Cooking", img: "/images/cooking.jfif" },
  },
  {
    text: "Treks or Hillstation?",
    left: { label: "Treks", img: "/images/trek.jfif" },
    right: { label: "Hillstation", img: "/images/hill.jfif" },
  },
  {
    text: "Jhumkas or Bangles?",
    left: { label: "Jhumkas", img: "/images/jhumka.jfif" },
    right: { label: "Bangles", img: "/images/bangles.jfif" },
  },
  {
    text: "Coffee or Tea?",
    left: { label: "Coffee", img: "/images/coffee.jfif" },
    right: { label: "Tea", img: "/images/tea.jfif" },
  },
  {
    text: "Sunrise or Sunset?",
    left: { label: "Sunrise", img: "/images/sunrise.jfif" },
    right: { label: "Sunset", img: "/images/sunset.jfif" },
  },
  {
    text: "Beach or Mountains?",
    left: { label: "Beach", img: "/images/beach.jfif" },
    right: { label: "Mountains", img: "/images/mountain.jfif" },
  },
  {
    text: "Books or Movies?",
    left: { label: "Books", img: "/images/books.jfif" },
    right: { label: "Movies", img: "/images/movies.jfif" },
  },
  {
    text: "Chocolate or Ice Cream?",
    left: { label: "Chocolate", img: "/images/chocolate.jfif" },
    right: { label: "Ice Cream", img: "/images/icecream.jfif" },
  },
];

export default function Questions() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const navigate = useNavigate();

  const choose = async (option) => {
    const updated = [...answers, option];
    setAnswers(updated);

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setFinished(true);

      await submitAnswers(updated);

      setTimeout(() => {
        navigate("/final");
      }, 2000);
    }
  };

  if (finished) {
    return (
      <div className="questionsPage">
        <h2>Thank you for letting me know you a little more 💖</h2>
        <p>Preparing your final birthday message...</p>
      </div>
    );
  }

  const q = questions[index];

  return (
    <div className="questionsPage">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{q.text}</h2>

        <div className="cardContainer">
          <motion.div
            className="choiceCard"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => choose(q.left.label)}
          >
            <img src={q.left.img} alt={q.left.label} />
            <p>{q.left.label}</p>
          </motion.div>

          <motion.div
            className="choiceCard"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => choose(q.right.label)}
          >
            <img src={q.right.img} alt={q.right.label} />
            <p>{q.right.label}</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}