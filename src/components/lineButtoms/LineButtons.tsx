import { MouseEvent } from 'react';

export const LineButtons = ({ data }: { data: string[] }) => {
  const handleClick = (e: MouseEvent) => {
    if ((e.currentTarget as Element).classList.contains('active')) {
      (e.currentTarget as Element).classList.remove('active');
    } else {
      (e.currentTarget as Element).classList.add('active');
      (e.currentTarget as Element).parentElement?.querySelectorAll('.active').forEach((item) => {
        if (item !== e.target) {
          item.classList.remove('active');
        }
      });
    }
  };

  return (
    <>
      {Array.isArray(data) &&
        data.map((item: string, index: number) => (
          <button key={index} onClick={handleClick}>
            {item}
          </button>
        ))}
    </>
  );
};
