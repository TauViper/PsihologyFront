import { Social } from '../../components/social/Social.tsx';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="login--container">
      <Social input={true} buttonText={'Войти'} />

      <section className="container">
        <span className="forgot--password">Забыли пароль? Поможем!</span>
        <Link to={'/'}>
          <span className="forgot--password">Восстановить</span>
        </Link>
      </section>
    </div>
  );
};
