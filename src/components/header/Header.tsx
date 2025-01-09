import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  div?: string;
  h1: string;
  p?: string;
}

export const Header: FC<HeaderProps> = ({ div, h1, p }) => {
  const history = useNavigate();
  return (
    <header className="container header">
      {div && <div onClick={() => history(-1)}>{div}</div>}
      <h1> {h1} </h1>
      {p && <p>{p}</p>}
    </header>
  );
};
