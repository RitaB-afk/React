import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Quote } from "./interfaces";

export default function Home() {
  const [apiData, setApiData] = useState<Quote[] | undefined>([]);
  const [randomIndex, setRandomIndex] = useState(0);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setApiData(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Quote Generator</h1>
      <div className={styles.quotecontainer} >
      <button
        onClick={() => {
          const index = getRandomInt(1, apiData.length - 1);
          setRandomIndex(index);
        }}
      >
        Generate a quote
      </button>
      <p style={{fontWeight:"bolder"}}>{apiData[randomIndex]?.text}</p>
      <p style={{fontWeight:"lighter"}}>"{apiData[randomIndex]?.author}"</p>
      </div>
    </div>
  );
}
