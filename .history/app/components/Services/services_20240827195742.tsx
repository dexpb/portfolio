import { AppWindow, Code, TabletSmartphone } from "lucide-react";

export function Services() {
  return (
    <div className="mb-20 flex flex-col items-center gap-20">
      <h1 className="text-6xl font-semibold uppercase">Serviços</h1>

      <div className="flex h-[300px] w-full flex-col items-center justify-center gap-10 bg-emph-dark lg:flex-row">
        <div>
          <AppWindow size={50} />
          <h2 className="font-bold">Site Institucional</h2>
          <p>Quer um site para apresentar seu trabalho? Pode contar comigo!</p>
        </div>
        <div className="">
          <TabletSmartphone size={50} />
          <h2 className="font-bold">Responsividade</h2>
          <p className="">
            Transformando seu site totalmente responsivo ao seu smartphone.
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
