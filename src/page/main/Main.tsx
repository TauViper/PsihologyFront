import { Button } from '../../components/button/Button.tsx';
import { iconsBlack } from '../../assets/socialIcon';
import arrowBlack from '../../assets/socialIcon/arrow_black.svg';
import { Link, useNavigate } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/Login`;
    navigate(path);
  };
  return (
    <div className=" container main--background">
      <div className="  main ">
        <section>
          <span className=" main--span">*****.Online</span>
        </section>
        <section>
          <h1 className="main--h1">{'Забота \nо ментальном \nздоровье \nкаждый день'}</h1>
        </section>
      </div>
      <section className="main--footer">
        <div className="main--div">
          <span className="main--footerSpan">
            Заботьтесь о себе, отслеживайте настроение, снижайте стресс и поддерживайте своё
            ментальное здоровье.
          </span>
          <Button text={'Войти'} handleClick={routeChange} />
          <section className="main--socialIcons">
            {iconsBlack.map((item) => (
              <Link key={item.name} to={item.url}>
                <img key={item.name} src={item.icon} alt={item.name} />
              </Link>
            ))}
            <div className="main--createAccount" onClick={() => navigate('/createUser')}>
              <span>Или создать аккаунт</span>
              <img src={arrowBlack} alt={'arrow'} />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
