import { AppWindow, Code, TabletSmartphone } from "lucide-react";

export function Services() {
  return (
    <div className="flex flex-col items-center justify-cente">
      <h1 className="text-6xl font-semibold uppercase">Serviços</h1>
      
      <div className="flex h-[280px] w-1/2 bg-white p-10 rounded-xl">
        <div className="bg-emph-darker">
          <AppWindow size={50} />
          <h2 className="font-bold">Site Institucional</h2>
          <p>Quer um site para apresentar seu trabalho? Pode contar comigo!</p>
        </div>
        <div className="bg-dark-mode">
          <TabletSmartphone size={50} />
          <h2 className="font-bold">Responsividade em seu site</h2>
          <p>
            O mundo moderno nos permite acessar sites pelo celular, e com isso,
            precisamos que eles se comportem perfeitamente na tela do smartphone
          </p>
        </div>
        <div className="bg-emph-dark">
          <Code size={50} />
          <h2 className="font-bold">Protótipo Pronto</h2>
          <p>
            Caso já tenha o design do seu site, vamos criá-lo e expor para o
            mundo!
          </p>
        </div>
      </div>
    </div>
  );
}
