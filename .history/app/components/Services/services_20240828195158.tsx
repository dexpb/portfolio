import { AppWindow, Code, TabletSmartphone } from "lucide-react";

export function Services() {
  return (
    <div className="flex flex-col items-center gap-20">
      <h1 className="text-6xl font-semibold uppercase">Serviços</h1>

      <div className="flex h-[300px] w-full flex-col items-center justify-center gap-10 bg-emph-dark lg:flex-row">
        <div className="m-20 flex w-3/5 gap-10">
          <div className="rounded-lg bg-emph-darker p-10">
            <AppWindow size={50} />
            <h2 className="font-bold">Desenvolvimento</h2>
            <p>
              Desenvolvo sites profissionais com qualidade para que você possa e
              sua empresa possam aparecer para o mundo.
            </p>
          </div>
          <div className="rounded-lg bg-emph-darker p-10">
            <TabletSmartphone size={50} />
            <h2 className="font-bold">Responsividade</h2>
            <p className="">
              Com foco na atualidade, a tecnologia está sempre em nossas mãos.
              Transformamos o seu site para que possa caber no seu celular.
            </p>
          </div>
          <div className="rounded-lg bg-emph-darker p-10">
            <Code size={50} />
            <h2 className="font-bold">UI/UX</h2>
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
