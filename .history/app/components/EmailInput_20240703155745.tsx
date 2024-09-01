import { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleClick = () => {
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
      />
      <button onClick={handleClick}>Abrir caixa de email</button>
    </div>
  );
};

export default EmailInput;