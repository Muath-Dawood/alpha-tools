import { useEffect, useState } from "react";

export const useIndex = (length: number, time: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
    }, time);

    return () => clearInterval(interval);
  }, []);

  return { currentIndex };
};
