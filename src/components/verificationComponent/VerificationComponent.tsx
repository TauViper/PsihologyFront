import VerificationInput from 'react-verification-input';
import { useState } from 'react';

export const VerificationComponent = () => {
  const [value, setValue] = useState('');
  const result = (code: string) => {
    console.log('completed', code);
    setValue(''); // clear the input value
  };
  return (
    <section className="container verification--pin">
      <VerificationInput
        length={5}
        value={value}
        onChange={(val) => setValue(val)}
        classNames={{
          character: 'verificationInput',
          characterFilled: 'verificationInput--filled'
        }}
        onComplete={result}
        autoFocus
      />
    </section>
  );
};
