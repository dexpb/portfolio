"use client"
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
        <label className="input input-bordered flex w-3/4 lg:w-2/6 items-center rounded-none border-none bg-dark-mode p-0 pl-2 text-white dark:bg-white dark:text-black">
        <input type="email" className="grow" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
        <div className="flex h-full w-14 cursor-pointer items-center justify-center border-none bg-emph-light dark:bg-emph-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-8 w-10 opacity-100" onClick={handleClick}
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
        </div>
      </label>
    </div>
  );
};

export default EmailInput;