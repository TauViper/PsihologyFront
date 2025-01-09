import { useEffect, useState } from 'react';
import { Button } from '../button/Button.tsx';

export const ButtonWithTimer = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [seconds, setSeconds] = useState(20);
  const minutesStr = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsStr = String(seconds % 60).padStart(2, '0');
  useEffect(() => {
    if (seconds === 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => Math.max(prevSeconds - 1, 0));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  return (
    <>
      {isDisabled ? (
        <Button isDisabled text={`Отправить код повторно ${minutesStr}:${secondsStr}`} />
      ) : (
        <Button text={'Отправить код повторно'} />
      )}
    </>
  );
};
