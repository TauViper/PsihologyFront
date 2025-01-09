import './footer.scss';
import home from '../../assets/footer/home.svg';
import users from '../../assets/footer/users.svg';
import heartPulse from '../../assets/footer/heartPulse.svg';
import chats from '../../assets/footer/chat.svg';
import user from '../../assets/footer/userCheck.svg';

export const Footer = () => {
  return (
    <footer className="container">
      <ul className="footer--buttons">
        <li key={'home'} className="home">
          <img src={home} alt={'home'} />
        </li>
        <li key={'users'} className="users">
          <img src={users} alt={'users'} />
        </li>
        <li key={'heartPulse'} className="heartPulse">
          <img src={heartPulse} alt={'heartPulse'} />
        </li>
        <li key={'chats'} className="chats">
          <img src={chats} alt={'chats'} />
        </li>
        <li key={'user'} className="user">
          <img src={user} alt={'user'} />
        </li>
      </ul>
    </footer>
  );
};
