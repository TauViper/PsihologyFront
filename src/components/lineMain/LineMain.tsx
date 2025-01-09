import { LineMainInterface } from '../../interfaces/interfaces.ts';
import { FC } from 'react';

export const LineMain: FC<LineMainInterface> = ({ span, button, line }) => {
  return (
    <main className="container">
      <section className="main--line">
        <span>{span}</span>
        <button>{button}</button>

        <ul className="line--img">
          {line &&
            line.slice(0, 5).map((item) => (
              <li key={item.name} className="line--imgLi">
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
};
