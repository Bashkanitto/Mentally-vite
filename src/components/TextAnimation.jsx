import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const TextAnimation = ({ text, typingDelay = 20 }) => {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      // eslint-disable-next-line react/prop-types
      if (index < text.length - 1) {
        setAnimatedText((prevText) => prevText + text[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingDelay);

    return () => clearInterval(timer);
  }, [text, typingDelay]);

  return <span>{animatedText}</span>;
};

export default TextAnimation;
