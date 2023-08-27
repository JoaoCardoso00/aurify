import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  UserGroupIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Trânsparencia.",
    description: "Visualização em tempo real de cada etapa do processo.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Segurança.",
    description:
      "Integridade e confidencialidade das informações ao longo de todo o processo de rastreabilidade do minério de ouro.",
    icon: LockClosedIcon,
  },
  {
    name: "Autenticidade.",
    description:
      "Verificação segura da procedência do minério, assegurando sua origem legítima em lavras de mineração legalmente operantes.",
    icon: UserGroupIcon,
  },
  {
    name: "Gerenciamento de dados.",
    description:
      "Acesso a dados de produção e qualidade em tempo real, com segurança e confiabilidade.",
    icon: FingerPrintIcon,
  },
  {
    name: "Integração.",
    description:
      "Integração com sistemas de marcação molecular do minério, que traz uma camada adicional de garantia de autenticidade.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Rastreabilidade.",
    description:
      "A rastreabilidade permite estabelecer um controle eficiente desde a extração até a comercialização.",
    icon: MapPinIcon,
  },
];

export function Dashboard() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Trânsparencia
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Visualização em Tempo Real da Procedência do Seu Ouro
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nossa tecnologia de rastreamento em blockchain e verificações
            precisas coloca o poder de garantir a autenticidade e qualidade do
            seu ouro diretamente em suas mãos.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="/example_2.webp"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
