import { Header } from '../../components/header/Header.tsx';
import VerificationInput from 'react-verification-input';
import { Button } from '../../components/button/Button.tsx';
import { useState } from 'react';
import { ButtonWithTimer } from '../../components/buttonWithTimer/ButtonWithTimer.tsx';

export const CreateCode = () => {
  const [code, setCode] = useState('');

  const result = (code: string) => {
    setCode(code);
    console.log('completed', code);
  };
  return (
    <div className="container">
      <Header h1={'Добрый вечер, \n Гномик Юрий'} />
      <span className="create--code--span">Введите код из СМС</span>
      <span className="create--code--span2">Отправлен на номер +7 (935) 760-11-40</span>
      <section className="container verification--pin">
        <VerificationInput
          length={5}
          classNames={{
            character: 'verificationInput',
            characterFilled: 'verificationInput--filled'
          }}
          onComplete={result}
          autoFocus
        />
      </section>
      {code ? <Button text={'Войти'} /> : <ButtonWithTimer />}
    </div>
  );
};
