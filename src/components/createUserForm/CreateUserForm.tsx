import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../button/Button.tsx';
import { useAppDispatch } from '../../store/hooks.tsx';
import { singUpUser } from '../../store/sigUpSlice.tsx';

const CreateUserSchema = z.object({
  login: z.string().min(2).max(20),
  email: z.string().email(),
  // phone: z.string(),
  password: z.string().min(8, { message: 'минимальная длина пароля 8 символов' }).max(20)
  // confirmPassword: z.string().min(8, { message: 'минимальная длина пароля 8 символов' }).max(20)
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: 'пароли не совпадают',
//   path: ['confirmPassword']
// });
export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;
export const CreateUserForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserSchemaType>({ resolver: zodResolver(CreateUserSchema) });
  const onSubmit: SubmitHandler<CreateUserSchemaType> = (data, event) => {
    dispatch(singUpUser(data));
    console.log(data);
    if (event) {
      event.target.reset();
    }
  };
  return (
    <section className="form create">
      <form className="form--sing" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="create--user--input"
          type="text"
          placeholder="Имя"
          {...register('login')}
        />
        <>{errors.login && <span>{errors.login.message}</span>}</>
        <input
          className="create--user--input"
          type="email"
          placeholder="Email"
          {...register('email')}
        />
        <>{errors.email && <span>{errors.email.message}</span>}</>
        {/*<input*/}
        {/*  className="create--user--input"*/}
        {/*  type="tel"*/}
        {/*  placeholder="Телефон"*/}
        {/*  {...register('phone')}*/}
        {/*/>*/}
        {/*<>{errors.phone && <span>{errors.phone.message}</span>}</>*/}
        <input
          className="create--user--input"
          type="password"
          placeholder="Пароль"
          {...register('password')}
        />
        <>{errors.password && <span>{errors.password.message}</span>}</>
        {/*<input*/}
        {/*  className="create--confirm--input"*/}
        {/*  type="password"*/}
        {/*  placeholder="Подтвердите пароль"*/}
        {/*  {...register('confirmPassword')}*/}
        {/*/>*/}
        {/*<>{errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}</>*/}

        <Button text={'Создать аккаунт'} param={'submit'} />
      </form>
    </section>
  );
};
