import { Social } from '../../components/social/Social.tsx';
import { SectionSpan } from '../../components/sectionSpan/SectionSpan.tsx';
import { Proppeler } from '../../components/proppeler/Proppeler.tsx';
import { useNavigate } from 'react-router-dom';

export const Reg = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Proppeler />
      <SectionSpan />
      <Social buttonText={'Создать аккаунт'} click={() => navigate('/singUp')} />
    </div>
  );
};
