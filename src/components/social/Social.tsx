import { icons } from '../../assets/socialIcon';
import elseImg from '../../assets/socialIcon/else.svg';
import { Button } from '../button/Button.tsx';
import { FC } from 'react';

interface Input {
  input?: boolean;
  buttonText: string;
  click?: () => void;
}

export const Social: FC<Input> = ({ input = false, buttonText, click }) => {
  return (
    <section className="social--center">
      <span className="title--reg">Войти с помощью:</span>
      <div className="social">
        {icons.map((item) => {
          return (
            <button key={item.name} className="social_button">
              <a href={item.url}>
                <img src={item.icon} alt={item.name} />
              </a>
            </button>
          );
        })}
      </div>
      <span>
        <img src={elseImg} alt={'else'} />
      </span>
      {input && <input type="text" className="email--inputLogin" placeholder="Email" />}
      <Button text={buttonText} handleClick={click} />
    </section>
  );
};
