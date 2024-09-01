const EmailButton = () => {
  const subject = encodeURIComponent("Serviço Front-End");
  const body = encodeURIComponent("Gostaria de contar com seu serviço para um projeto Front-End.");
  const mailtoLink = `mailto:pablo.correa21@hotmail.com?subject=${subject}&body=${body}`;

  return (
    <div>
      <label className="input input-bordered flex w-3/4 items-center rounded-none border-none bg-dark-mode p-0 pl-2 text-white dark:bg-white dark:text-black lg:w-2/6">
        <input type="email" className="grow" placeholder="Digite seu email" />
        <div className="flex h-full w-14 cursor-pointer items-center justify-center border-none bg-emph-light dark:bg-emph-dark">
          <a href={mailtoLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-8 w-10 opacity-100"
              href={mailtoLink}
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
          </a>
        </div>
      </label>
    </div>
  );
};

export default EmailButton;
