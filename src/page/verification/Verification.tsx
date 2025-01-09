import { Header } from '../../components/header/Header.tsx';
import { VerificationComponent } from '../../components/verificationComponent/VerificationComponent.tsx';

export const Verification = () => {
  return (
    <>
      <Header h1={'Добрый вечер, \n Гномик Юрий'} />
      <span className="container verification--span">Введите ваш пин</span>
      <VerificationComponent />
    </>
  );
};
