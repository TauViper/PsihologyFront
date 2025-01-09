import { FC, ReactElement } from 'react';

interface ButtonProps {
  text: string;
  param?: 'submit' | 'reset' | 'button';
  isDisabled?: boolean;
  isActive?: boolean;
  handleClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  text,
  param,
  isDisabled = false,
  handleClick
}): ReactElement => {
  return (
    <button disabled={isDisabled} type={param} onClick={handleClick}>
      {text}
    </button>
  );
};
