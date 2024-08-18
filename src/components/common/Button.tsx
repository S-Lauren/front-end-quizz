import React, { SyntheticEvent } from "react";
import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void;
  //   icon: string;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="quiz-topic-button">
      {children}
    </button>
  );
};
