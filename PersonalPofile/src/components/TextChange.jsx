import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Pooja",
    "Hi, I'm a Frontend Developer",
    "Hi, I'm a Backend Developer",
    "Hi, I'm a Freelancer",
    "Hi, I'm a Fullstack Developer"
  ];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current text with a substring
      setCurrentText(texts[index].substring(0, endValue));

      // Control the direction of typing (forward/backward)
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      // Reverse typing direction when the text is fully typed or erased
      if (isForward && endValue >= texts[index].length + 10) {
        setIsForward(false);
      } else if (!isForward && endValue <= 0) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); // Move to the next text cyclically
      }
    }, 100); // Adjust the speed of typing here (in milliseconds)

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
