import SanRafaelLogo from "../images/sanrafael.jpg";
import AtheneuLogo from "../images/atheneu.jpeg";
import AliancaFrancesaLogo from "../images/aliancafrancesa.png";
import MoldLajesLogo from "../images/moldlajes.webp";

function Customers() {
  return (
    <div id="customers" className="flex flex-col justify-center py-14">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-black">Nossos Clientes</h2>
        </div>
      </div>

      <div className="flex pt-10 flex-wrap justify-center gap-5 mt-10 md:justify-around">
        <div className="text-gray-400 dark:text-gray-400">
          <a href="https://www.colegiosanrafael.com.br" target="_blank">
            <img
              className="max-h-14 hover:filter-none grayscale"
              alt="customer"
              src={SanRafaelLogo}
            />
          </a>
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <a href="https://www.seduc.se.gov.br" target="_blank">
            <img
              className="max-h-14 hover:filter-none grayscale"
              alt="customer"
              src={AtheneuLogo}
            />
          </a>
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <a href="http://www.afaju.com.br" target="_blank">
            <img
              className="max-h-14 hover:filter-none grayscale"
              alt="customer"
              src={AliancaFrancesaLogo}
            />
          </a>
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <img
            className="max-h-14 hover:filter-none grayscale"
            alt="customer"
            src={MoldLajesLogo}
          />
        </div>
      </div>
    </div>
  );
}

export default Customers;
