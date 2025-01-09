import elips1 from '../../assets/lineSpec/Ellipse 13.jpg';
import elips2 from '../../assets/lineSpec/Ellipse 14.jpg';
import elips3 from '../../assets/lineSpec/Ellipse 15.jpg';
import { Users } from '../../interfaces/interfaces.ts';
import omg from '../../assets/likes/Bookmark.svg';
import heart from '../../assets/likes/Heart.svg';
import chat from '../../assets/likes/Chat.svg';
import send from '../../assets/likes/Send.svg';
import show from '../../assets/likes/Show.svg';
import './likes.scss';

const users: Users[] = [
  { img: elips1, name: 'Александр1' },
  { img: elips2, name: 'Александр2' },
  { img: elips3, name: 'Александр3' }
];

export const Likes = () => {
  return (
    <>
      <div className="likes">
        <span>Нравится</span>
        <ul>
          {users &&
            users.map((item, index) => (
              <li key={item.name} style={{ zIndex: -index }}>
                <img className="likes--img" src={item.img} alt={item.name} />
              </li>
            ))}
        </ul>
        <img className="icon" src={omg} alt={'omg'} />
      </div>
      <ul className="likes--points">
        <li key={'heart'} className="heart">
          <img src={heart} alt={'heart'} />
        </li>
        <li key={'chat'} className="chat">
          <img src={chat} alt={'chat'} />
        </li>
        <li key={'send'} className="send">
          <img src={send} alt={'send'} />
        </li>
        <li key={'show'} className="show">
          <img src={show} alt={'show'} />
        </li>
      </ul>
    </>
  );
};
