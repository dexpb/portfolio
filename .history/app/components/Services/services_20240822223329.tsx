import { AppWindow, Code, TabletSmartphone } from "lucide-react";

export function Services() {
  return (
    <div className="justify-cente flex flex-col items-center">
      <h1 className="text-6xl font-semibold uppercase">Serviços</h1>

      <div className="flex items-center justify-center h-[350px] w-3/5 gap-10 rounded-xl  bg-gradient-to-b from-emph-dark to-emph-darker p-10">
        <div className="">
          <AppWindow size={50} />
          <h2 className="font-bold">Site Institucional</h2>
          <p>Quer um site para apresentar seu trabalho? Pode contar comigo!</p>
        </div>
        <div className="">
          <TabletSmartphone size={50} />
          <h2 className="font-bold">Responsividade em seu site</h2>
          <p>
            O mundo moderno nos permite acessar sites pelo celular, e com isso,
            precisamos que eles se comportem perfeitamente na tela do smartphone
          </p>
        </div>
        <div className="">
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
