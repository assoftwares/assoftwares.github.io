import {
  AiOutlineDropbox,
  AiTwotoneCustomerService,
  AiTwotoneLock,
} from "react-icons/ai";

function Services() {
  return (
    <section className="relative block bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 id="services" className="text-4xl font-semibold text-black">
              Construa algo
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              A sua ideia de negócio pode se tornar realidade! Construimos
              sistemas personalizados em tempo hábil e oferecemos o melhor do
              atendimento ao cliente.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <AiOutlineDropbox className="text-2xl" />
            </div>
            <h6 className="text-xl mt-5 font-semibold text-black">
              Suporte e Implantação
            </h6>
            <p className="mt-2 mb-4 text-gray-500">
              Atendimento personalizado, antes, durante e depois da implantação.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <AiTwotoneLock className="text-2xl" />
            </div>
            <h5 className="text-xl mt-5 font-semibold text-black">Segurança</h5>
            <p className="mt-2 mb-4 text-gray-500">
              Implementação de medidas para garantir a confidencialidade e
              integridade das informações
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <AiTwotoneCustomerService className="text-2xl" />
            </div>
            <h5 className="text-xl mt-5 font-semibold text-black">
              Treinamento e Consultoria
            </h5>
            <p className="mt-2 mb-4 text-gray-500">
              Nas etapas de implantação e atualizações, oferecemos treinamentos
              para os envolvidos e consultoria conforme o levantamento das
              necessidades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
