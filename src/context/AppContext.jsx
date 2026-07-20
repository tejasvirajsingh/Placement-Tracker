import { createContext, useContext, useEffect, useState } from "react";
import dsaTopics from "../data/dsaTopics";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // DSA Progress
  const [completedDSA, setCompletedDSA] = useState(() =>
    JSON.parse(localStorage.getItem("dsaProgress")) || {}
  );

  // Words
  const [words, setWords] = useState(() =>
    JSON.parse(localStorage.getItem("words")) || []
  );

  // Aptitude
  const [aptitude, setAptitude] = useState(() =>
    JSON.parse(localStorage.getItem("aptitude")) || {}
  );

  // Save DSA Progress
  useEffect(() => {
    localStorage.setItem(
      "dsaProgress",
      JSON.stringify(completedDSA)
    );
  }, [completedDSA]);

  // Save Words
  useEffect(() => {
    localStorage.setItem(
      "words",
      JSON.stringify(words)
    );
  }, [words]);

  // Save Aptitude
  useEffect(() => {
    localStorage.setItem(
      "aptitude",
      JSON.stringify(aptitude)
    );
  }, [aptitude]);

  // DSA Statistics
  const dsaCompleted = dsaTopics.filter(
    (topic) => completedDSA[topic]
  ).length;

  const dsaPercentage =
    dsaTopics.length === 0
      ? 0
      : Math.round((dsaCompleted / dsaTopics.length) * 100);

  return (
    <AppContext.Provider
      value={{
        // DSA
        completedDSA,
        setCompletedDSA,
        dsaCompleted,
        dsaPercentage,

        // Words
        words,
        setWords,

        // Aptitude
        aptitude,
        setAptitude,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);