import show from '../../assets/passHideShow/show.svg';
import hide from '../../assets/passHideShow/hide.svg';
import { Button } from '../button/Button.tsx';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'минимальная длина пароля 8 символов' }).max(20)
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const SingUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data, event) => {
    console.log(data);
    if (event) {
      event.target.reset();
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (showPassword) {
      document.querySelector('.password--input')?.setAttribute('type', 'text');
    } else {
      document.querySelector('.password--input')?.setAttribute('type', 'password');
    }
  }, [showPassword]);
  return (
    <section className="form">
      <form className="form--sing" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="email--input"
          type="email"
          placeholder={'email/телефона/логин'}
          {...register('email')}
        />
        <>{errors.email && <span>{errors.email.message}</span>}</>
        <div style={{ position: 'relative' }}>
          <input
            className="password--input"
            type="password"
            placeholder={'Пароль минимум 8 символов'}
            {...register('password')}
          />
          <>{errors.password && <span>{errors.password.message}</span>}</>
          <img
            onClick={() => setShowPassword(!showPassword)}
            src={showPassword ? show : hide}
            alt="show"
            className="password--show"></img>
        </div>

        <Button text={'Cоздать аккаунт'} param="submit" />
      </form>
    </section>
  );
};
