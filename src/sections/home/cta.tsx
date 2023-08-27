export function CTA() {
  return (
    <div className="bg-white pb-10">
      <div className="px-6 pt-24 pb-48 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Garanta a Procedência Confiável do Seu Negócio
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 text-2xl">
            Saiba mais sobre como implementar o rastreamento do seu produto.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Experimente agora
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Aprenda mais <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
