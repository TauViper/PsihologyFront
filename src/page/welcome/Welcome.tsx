import { Header } from '../../components/header/Header.tsx';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import './welcome.scss';
import { Link } from 'react-router-dom';

const contactInfoSchema = z.string().refine((value) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  const nameRegex = /^[a-zA-Z ]+$/;

  return emailRegex.test(value) || phoneRegex.test(value) || nameRegex.test(value);
}, 'Invalid email, phone number or name');

const passwordSchema = z.string().min(8, 'Password must be at least 8 characters long');

const rememberMeSchema = z.boolean();
const ComebackSchema = z.object({
  name: contactInfoSchema,
  password: passwordSchema,
  remember: rememberMeSchema
});

type ComebackSchemaType = z.infer<typeof ComebackSchema>;

export const Welcome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ComebackSchemaType>({ resolver: zodResolver(ComebackSchema) });
  const onSubmit: SubmitHandler<ComebackSchemaType> = (data, event) => {
    console.log(data);
    if (event) {
      event.target.reset();
    }
  };

  return (
    <section className="form create">
      <Header h1={'С возвращением'} div="&larr;" p={'Продолжите ваше путешествие'} />
      <form className="form--sing" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="create--user--input"
          type="text"
          placeholder="email/телефона/логин"
          {...register('name')}
        />

        {errors.name && <span>{errors.name.message}</span>}
        <input
          className="create--user--input"
          type="password"
          placeholder="Пароль"
          {...register('password')}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <div className="checkbox">
          <input className="checkbox--input" type="checkbox" {...register('remember')} />
          <p className="checkbox--text">Запомнить меня</p>
        </div>

        <button type="submit">Войти</button>
      </form>
      <Link className="checkbox--link" to={'/comeBack'}>
        Забыли пароль?
      </Link>
    </section>
  );
};
