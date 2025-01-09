import { Header } from '../../components/header/Header.tsx';
import { SingUpForm } from '../../components/singUpForm/SingUpForm.tsx';

export const SingUp = () => {
  // const [submit, setSubmit] = useState('');

  return (
    <>
      <Header div="&larr;" h1={'Регистрация'} />
      <SingUpForm />
    </>
  );
};
