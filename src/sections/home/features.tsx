import {
  ArrowPathIcon,
  LockClosedIcon,
  MapPinIcon,
  DocumentCheckIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Rastreabilidade",
    description:
      "A rastreabilidade do minério de ouro desempenha um papel crucial no contexto das empresas. Ao agregar valor ao produto final e fornecer maior transparência no processo produtivo, a rastreabilidade permite estabelecer um controle eficiente desde a extração até a comercialização.",
    href: "#",
    icon: MapPinIcon,
  },
  {
    name: "Segurança",
    description:
      "Amplamente reconhecida por sua robustez e segurança intrínseca. Por meio da imutabilidade e do compartilhamento descentralizado de registros, a tecnologia blockchain garante a integridade e a confidencialidade das informações ao longo de todo o processo de rastreabilidade do minério de ouro.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Autenticidade",
    description:
      "Nossa solução de rastreabilidade é facilmente integrada a um sistema externo de marcação molecular do minério, que traz uma camada adicional de garantia de autenticidade. Ao permitir uma marcação única e exclusiva, esse sistema viabiliza a verificação segura da procedência do minério, assegurando sua origem legítima em lavras de mineração legalmente operantes.",
    href: "#",
    icon: DocumentCheckIcon,
  },
];

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Segurança
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Confie no Seu Ouro, Confie na Nossa Tecnologia
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nossa tecnologia de rastreamento em blockchain e verificações
            precisas coloca o poder de garantir a autenticidade e qualidade do
            seu ouro diretamente em suas mãos.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
