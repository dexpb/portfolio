import { AppWindow, Code, TabletSmartphone } from "lucide-react";

export function Services() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-6xl font-semibold uppercase">Serviços</h1>

      <div className="flex h-[350px] w-full flex-col items-center justify-center  lg:flex-row">
        <div className="m-20 flex w-3/5 gap-5">
          <div className="rounded-lg bg-emph-darker p-10 flex flex-col gap-5">
            <AppWindow size={50} />
            <h2 className="font-bold text-lg">Desenvolvimento</h2>
            <p>
              Desenvolvo sites profissionais com qualidade para que você possa e
              sua empresa possam aparecer para o mundo.
            </p>
          </div>
          <div className="rounded-lg bg-emph-darker p-10 flex flex-col gap-5">
            <TabletSmartphone size={50} />
            <h2 className="font-bold text-lg">Responsividade</h2>
            <p className="">
              Deixando o Design sempre responsivo para que sua página fique
              perfeitamente adaptada a tela do seu smartphone.
            </p>
          </div>
          <div className="rounded-lg bg-emph-darker p-10 flex flex-col gap-5">
            <Code size={50} />
            <h2 className="font-bold text-lg">UI/UX</h2>
            <p>
              Transformar o Design da sua página profissional para que seja
              clara, confortável, intuitiva e chamativa visualmente para o
              usuário.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
