import { AppWindow, Code, TabletSmartphone } from "lucide-react";

export function Services() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-semibold uppercase">Serviços</h1>
      <div className="flex h-[280px] w-1/2 bg-white">
        <div className="bg-emph-darker">
          <AppWindow />
          <h2 className="text-black">Site Institucional</h2>
          <p>Quer um site para apresentar seu trabalho? Pode contar comigo!</p>
        </div>
        <div className="bg-dark-mode">
          <TabletSmartphone />
          <h2>Responsividade em seu site</h2>
          <p>
            O mundo moderno nos permite acessar sites pelo celular, e com isso,
            precisamos que eles se comportem perfeitamente na tela do smartphone
          </p>
        </div>
        <div className="bg-emph-dark">
          <Code size={20} />
          <h2>Protótipo Pronto</h2>
          <p>
            Caso já tenha o design do seu site, vamos criá-lo e expor para o
            mundo!
          </p>
        </div>
      </div>
    </div>
  );
}
