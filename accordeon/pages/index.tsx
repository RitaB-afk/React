import styles from "../styles/Home.module.css";
import Question from "./question";

export default function Home() {
  const faq = [
    { question: "Is this a good product?", answer: "Yes..." },
    { question: "How much does it cost?", answer: "20 dollars" },
    { question: "When can I get it?", answer: "as soon as possible" },
  ];

  return (
    <div className={styles.container}>
      <h1>FAQ</h1>
      <div>
        <h2>Frequently asked questions</h2>
        {faq.map((part, index) => (
          <Question key={index} question={part.question} answer={part.answer} />
        ))}
      </div>
    </div>
  );
}
