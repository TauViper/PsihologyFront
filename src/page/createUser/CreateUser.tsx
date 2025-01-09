import { Header } from '../../components/header/Header.tsx';
import { CreateUserForm } from '../../components/createUserForm/CreateUserForm.tsx';
import { Link } from 'react-router-dom';

export const CreateUser = () => {
  return (
    <div>
      <Header h1={'Создание аккаунта'} div="&larr;" />
      <CreateUserForm />
      <section className="create--links">
        <Link to={'/comeBack'}> Есть другой аккаунт</Link>
        <Link to={'/login'}> Войти </Link>
      </section>
    </div>
  );
};
