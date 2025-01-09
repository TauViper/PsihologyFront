import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './page/main/Main.tsx';
import { Reg } from './page/reg/Reg.tsx';
import { SingUp } from './page/singUp/SingUp.tsx';
import { Verification } from './page/verification/Verification.tsx';
import { Login } from './page/login/Login.tsx';
import { CreateUser } from './page/createUser/CreateUser.tsx';
import { CreateCode } from './page/createCode/CreateCode.tsx';
import { Line } from './page/line/Line.tsx';
import '../src/scss/app.scss';
import { Welcome } from './page/welcome/Welcome.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/reg'} element={<Reg />} />
          <Route path={'/singUp'} element={<SingUp />} />
          <Route path={'/verification'} element={<Verification />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/createUser'} element={<CreateUser />} />
          <Route path={'/comeBack'} element={<Welcome />} />
          <Route path={'/createCode'} element={<CreateCode />} />
          <Route path={'/line'} element={<Line />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
