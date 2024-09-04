import React, { memo } from "react";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  ADD_BUTTON = "addButton",
  DELETE_BUTTON = "deleteButton",
}

interface Props {
  className?: string;
  theme: ButtonTheme;
  text?: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = memo(({ className, text, theme, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(cls.Button, [cls[theme], className])}
    >
      {text}
    </button>
  );
});
