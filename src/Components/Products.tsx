import BlackboardImage from "../images/blackboard.png";
import SchoolImage from "../images/school.png";
import WarehouseImage from "../images/warehouse.png";

function Product() {
  return (
    <section className="scroll-smooth relative block bg-blue-800">
      <div className="container mx-auto px-4 py-20 lg:px-24 ">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 id="products" className="text-4xl font-semibold text-white">
              Nossos Sistemas
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-white">
              Alguns dos nossos consolidados sistemas.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 py-8 text-center">
            <div className="text-gray-900 p-6 w-28 h-28 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <img src={BlackboardImage} alt="blackboard" />
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">
              Informação Acadêmica
            </h6>
          </div>
          <div className="w-full lg:w-3/12 px-4 py-8 text-center">
            <div className="text-gray-900 p-6 w-28 h-28 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <img src={SchoolImage} alt="blackboard" />
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              Gerencial Acadêmico
            </h5>
          </div>
          <div className="w-full lg:w-3/12 px-4 py-8 text-center ">
            <div className="text-gray-900 p-6 w-28 h-28 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <img src={WarehouseImage} alt="blackboard" />
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">Estoque</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
