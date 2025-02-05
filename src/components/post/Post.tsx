import avatar from '../../assets/post/Ellipse 18.jpg';
import threeDots from '../../assets/post/More Square.svg';
import { useState } from 'react';
import postImg from '../../assets/post/PostImage.png';

export const Post = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="post">
      <div className="post--header">
        <img src={avatar} alt="avatar" />
        <div className="post--avatarDicription">
          <span>Гномик Юрий</span>
          <span>Писатель публицист</span>
          <span>20.10.2024</span>
        </div>
        <button className="post--button">
          <img src={threeDots} alt="threeDots" />
        </button>
      </div>
      <div className="post--text">
        <h2>Слова как путь к пониманию себя</h2>
        <p className={show ? 'show' : 'hide'}>
          Иногда слова — это все, что у нас есть, чтобы выразить то, что мы чувствуем внутри. Мы
          носим в себе эмоции, которые сложно объяснить, и порой не находим для них подходящего
          места в повседневной жизни. Но если дать себе время и пространство для осознанного диалога
          с собой, можно открыть нечто удивительное — способность понимать себя лучше и находить
          баланс. Я верю, что каждый из нас заслуживает внимания к своим чувствам, ведь именно они
          формируют нашу реальность. Писательство для меня — способ создать это пространство.
        </p>
        <span onClick={() => setShow(!show)}>{show ? 'Скрыть' : 'Читать далее'}</span>
      </div>
      <img src={postImg} alt="img" className="post--img" />
    </section>
  );
};
