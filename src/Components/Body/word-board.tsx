import React from "react";

interface Props {
  words: string[];
  currentLetter: string;
}

const WordBoard: React.FC<Props> = ({
  words,
  currentLetter,
}: Props): React.ReactElement => {
  const wordsDisplayed = words
    .filter((e) => e[0] === currentLetter)
    .map((e, idx) => <li key={idx}>{e}</li>);

  // let testArr: string[] = ["a", "b", "c", "d", "e"];
  // //Shuffle Test
  // function shuffleArray(array: string[]) {
  //   let i = array.length - 1;
  //   for (i; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }
  // shuffleArray(wordsDisplayed as unknown as string[]);
  // console.log(testArr);
  // shuffleArray(testArr);
  // console.log(testArr);

  return (
    <>
      <div className="word-board-container">
        <ul className="word-board-list">{wordsDisplayed}</ul>
        {/* <ul className="word-board-list">{shuffledArray}</ul> */}
      </div>
    </>
  );
};

export default WordBoard;
