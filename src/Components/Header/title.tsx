import React from "react";

interface Props {
  currentLetter: string;
}

const Title: React.FC<Props> = ({
  currentLetter,
}: Props): React.ReactElement => {
  return (
    <>
      <div className="title-container">
        <h1>Dictionary: {currentLetter.toUpperCase()}</h1>
      </div>
    </>
  );
};

export default Title;
