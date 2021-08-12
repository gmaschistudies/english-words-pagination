import React from "react";

interface Props {
  currentLetter: string;
  handleChange: (e: string) => void;
}

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
        className={
          String.fromCharCode(idx + 97) === currentLetter
            ? "actual-index-button"
            : "index-button"
        }
        onClick={onButtonClick}
      >
        {idx === 0 || idx === 25 || idx === currentLetter.charCodeAt(0) % 97
          ? idx + 1
          : // : idx === (currentLetter.charCodeAt(0) % 97) + 1
          previousLetter === String.fromCharCode(idx + 97)
          ? "<"
          : ">"}
      </button>
    );
  });

  console.log(`previous: ${previousLetter}, next: ${nextLetter}`);
  return (
    <>
      <div className="index-navigation-container">
        {buttonsArray.map((e, idx) => {
          return idx === 0 ||
            idx === buttonsArray.length - 1 ||
            currentLetter === e.props.id ||
            e.props.id === previousLetter ||
            e.props.id === nextLetter
            ? e
            : null; //porquice, como trocar a classe aqui para estilizar o elemento atual, não consigo atribuir valor pra className
          //qual o jeito mais inteligente de colocar uma só div com reticências entre os eelementos, e não uma div pra cada um no map?
        })}
      </div>
    </>
  );
};

export default IndexNavigation;
