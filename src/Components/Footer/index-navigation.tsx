import React from "react";

interface Props {
  currentLetter: string;
  handleChange: (e: string) => void;
}

const sidePages = 1;

const IndexNavigation: React.FC<Props> = ({
  currentLetter,
  handleChange,
}: Props): React.ReactElement => {
  const onButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = e.target as HTMLButtonElement; //is there a better way to do this without type assertion?
    console.log(button.id);
    handleChange(button.id); //cannot access e.target.props.id or e.target.id
  };
  const previousLetter = String.fromCharCode(currentLetter.charCodeAt(0) - 1);
  const nextLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
  //poderia deixar esse array inicial fora do componente já que ele não é atualizado?
  //só precisaria ver como alterar a classe do botão com base no indice atual
  //OU
  //deixar assim mesmo já que ele vai precisar do estado pra fazer a verificação?
  //poderia ser extraído como um outro componente tb? e injetado dentro desse atual?
  const buttonsArray: React.ReactElement[] = Array.from(Array(26), (e, idx) => {
    return (
      <button
        key={idx}
        id={String.fromCharCode(idx + 97)}
        className={buttonClass(idx, currentLetter)}
        onClick={onButtonClick}
      >
        {buttonTag(idx, currentLetter)}
      </button>
    );
  });
  // previousLetter === String.fromCharCode(idx + 97)
  console.log(`previous: ${previousLetter}, next: ${nextLetter}`);
  return (
    <>
      <div className="index-navigation-container">
        {buttonsArray.map((e, idx) => {
          return idx === 0 ||
            idx === buttonsArray.length - 1 ||
            currentLetter === e.props.id ||
            Math.abs(idx - (currentLetter.charCodeAt(0) % 97)) <= sidePages + 1
            ? e
            : null; //porquice, como trocar a classe aqui para estilizar o elemento atual, não consigo atribuir valor pra className
          //qual o jeito mais inteligente de colocar uma só div com reticências entre os eelementos, e não uma div pra cada um no map?
        })}
      </div>
    </>
  );
};

const buttonTag = (index: number, letter: string) => {
  console.log(Math.abs(index - (letter.charCodeAt(0) % 97)));
  return index === 0 ||
    index === 25 ||
    Math.abs(index - (letter.charCodeAt(0) % 97)) < sidePages + 1
    ? index + 1
    : index - (letter.charCodeAt(0) % 97) === -(sidePages + 1)
    ? "<<"
    : index - (letter.charCodeAt(0) % 97) === sidePages + 1
    ? ">>"
    : null;
};

const buttonClass = (index: number, letter: string) => {
  return String.fromCharCode(index + 97) === letter
    ? "actual-index-button"
    : Math.abs(index - (letter.charCodeAt(0) % 97)) === sidePages + 1
    ? "previous-next-button"
    : "index-button";
};

export default IndexNavigation;
