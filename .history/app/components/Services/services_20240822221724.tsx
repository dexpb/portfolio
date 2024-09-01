export function Services() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-6xl font-semibold uppercase">Serviços</h1>
      <div className="h-[280px] w-[190px] bg-white">
        <div className="bg-emph-darker">
          <h2 className="text-black">Site Institucional</h2>
          <p>Quer um site para apresentar seu trabalho? Pode contar comigo!</p>
        </div>
        <div className="bg-dark-mode">
          <h2>Responsividade em seu site</h2>
          <p>
            O mundo moderno nos permite acessar sites pelo celular, e com isso,
            precisamos que eles se comportem perfeitamente na tela do smartphone
          </p>
        </div>
        <div className="bg-emph-dark">
          <h2>Protótipo Pronto</h2>
          <p>Caso já tenha o design do seu site, vamos criá-lo e expor para o mundo!</p>
        </div>
      </div>
    </div>
  );
}
