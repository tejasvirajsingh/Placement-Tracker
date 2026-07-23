export const loadWords = () => {
  return JSON.parse(localStorage.getItem("words")) || [];
};

export const saveWords = (words) => {
  localStorage.setItem("words", JSON.stringify(words));
};