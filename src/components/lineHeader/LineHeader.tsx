import search from '../../assets/lineHeader/Search.svg';
import bell from '../../assets/lineHeader/bell.svg';
import moreCicle from '../../assets/lineHeader/MoreCircle.svg';

const icons = [search, bell, moreCicle];
export const LineHeader = () => {
  return (
    <header className="container line--header">
      <h1>Лента</h1>
      <div className="line--header-icons">
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt="icon" />
        ))}
      </div>
    </header>
  );
};
