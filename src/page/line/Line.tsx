import { LineHeader } from '../../components/lineHeader/LineHeader.tsx';
import { LineMain } from '../../components/lineMain/LineMain.tsx';
import elips1 from '../../assets/lineSpec/Ellipse 13.jpg';
import elips2 from '../../assets/lineSpec/Ellipse 14.jpg';
import elips3 from '../../assets/lineSpec/Ellipse 15.jpg';
import elips4 from '../../assets/lineSpec/Ellipse 16.jpg';
import elips5 from '../../assets/lineSpec/Ellipse 17.jpg';
import { Users } from '../../interfaces/interfaces.ts';
import { LineButtons } from '../../components/lineButtoms/LineButtons.tsx';
import { Post } from '../../components/post/Post.tsx';
import { Likes } from '../../components/likes/Likes.tsx';
import { Button } from '../../components/button/Button.tsx';
import { Footer } from '../../components/footer/Footer.tsx';

const span: string[] = ['Рекомендации', 'Подписки', 'Избранное'];

const elips: Users[] = [
  { img: elips1, name: 'Александр1' },
  { img: elips2, name: 'Александр2' },
  { img: elips3, name: 'Александр3' },
  { img: elips4, name: 'Александр4' },
  { img: elips5, name: 'Александр5' },
  { img: elips1, name: 'Александр6' },
  { img: elips2, name: 'Александр7' },
  { img: elips3, name: 'Александр8' },
  { img: elips4, name: 'Александр9' },
  { img: elips5, name: 'Александр10' }
];
export const Line = () => {
  return (
    <>
      <div className=" wrapper">
        <LineHeader />
        <LineMain span={'Специалисты'} button={`Все специалисты`} line={elips} />
        <div className="line--buttons">
          <LineButtons data={span} />
        </div>
        <section className=" container line--post">
          <Post />
          <Likes />
        </section>
        <section className="container line--add">
          <Button text={'+ Добавить'} />
        </section>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};
