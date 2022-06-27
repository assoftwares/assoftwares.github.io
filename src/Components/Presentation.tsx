import Mockup from "../images/mockup.png";
import PresentationImage from "../images/presentation.svg";
import ButtonHighligh from "./ButtonHighligh";

function Presentation() {
  return (
    <section>
      <div className="w-full py-10 px-6 bg-blue-800  ">
        <div className="flex flex-col max-w-4xl mx-auto my-0 md:flex-row md:px-0">
          <div className="flex-1">
            <img
              src={PresentationImage}
              className="min-w-full sm:max-w-sm mx-auto md:mx-0"
              alt="mockup"
            />
          </div>
          <div className="flex-1">
            <div className="max-w-full sm:max-w-md mx-auto md:mx-0">
              <div className="text-3xl font-bold text-white text-center md:text-left">
                <span>Sistema Acadêmico Gerencial</span>
              </div>
              <div className="pt-5 text-lg text-white ">
                <span>
                  É uma plataforma que oferece todas as funcionalidades para
                  atender no controle do gerenciamento da instituição de ensino,
                  com acesso as informações acadêmicas e gerenciais de forma
                  rápida e segura.
                </span>
              </div>
              <div className="pt-14 text-center md:text-left">
                <ButtonHighligh text="Conhecer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
