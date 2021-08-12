import React, { useState } from "react";
import wordsArr from "an-array-of-english-words";
import Title from "../Header/title";
import WordBoard from "../Body/word-board";
import IndexNavigation from "../Footer/index-navigation";

const Controller: React.FC = (): React.ReactElement => {
  const [currentLetter, setCurrentLetter] = useState("a");
  //filtrar o array completo aqui já antes de passar pro WordBoard ou deixar do jeito que está? -- Evitaria passar o estado para o componente

  const handleLetterChange = (e: string): void => {
    setCurrentLetter(e);
  };

  return (
    <div className="controller-container">
      <Title currentLetter={currentLetter} />
      <WordBoard words={wordsArr} currentLetter={currentLetter} />
      <IndexNavigation
        currentLetter={currentLetter}
        handleChange={handleLetterChange}
      />
    </div>
  );
};

export default Controller;
