/* eslint-disable prettier/prettier */
export default function Sidebar({
  setDrinksFiltered,
  drinksByName,
  allDrinks,
  setCurrentPage,
}) {
  const handleProducts = (value) => {
    if (value === 'All') {
      setDrinksFiltered(allDrinks);
      setCurrentPage(1);
    } else {
      setDrinksFiltered(drinksByName[value]);
      setCurrentPage(1);
    }
  };

  return (
    <section className="w-96 h-auto bg-gray-800 flex flex-col pl-16 text-white border-r-2 border-black">
      <span className=" pt-16 font-semibold border-b border-white w-1/2 text-xl">
        CATEGORIA
      </span>

      <ul className="py-8 border-b border-white w-1/2">
        <li className="cursor-pointer">
          <button type="button" onClick={() => handleProducts('All')}>
            Todas
          </button>
        </li>
        <li className="cursor-pointer">
          <button type="button" onClick={() => handleProducts('Whisky')}>
            Whisky
          </button>
        </li>
        <li className="cursor-pointer">
          <button type="button" onClick={() => handleProducts('Beer')}>
            Cerveza
          </button>
        </li>
        <li className="cursor-pointer">
          <button type="button" onClick={() => handleProducts('Wine')}>
            Vinos
          </button>
        </li>
        <li className="cursor-pointer">
          <button type="button" onClick={() => handleProducts('Brandy')}>
            Brandy
          </button>
        </li>
        <li className="cursor-pointer">
          <button type="button" onClick={() => handleProducts('Licor')}>
            Licores
          </button>
        </li>
        <li className="cursor-pointer">
          <button type="button" onClick={() => handleProducts('Gin')}>
            Gin
          </button>
        </li>
        <li className=" pr-2 cursor-pointer">
          <button type="button" onClick={() => handleProducts('Cognac')}>
            Cognac
          </button>
        </li>
      </ul>

      <span className="text-left font-semibold my-8">PRECIO</span>

      <div className="flex mb-12  ">
        <span className="font-semibold">
          ${' '}
          <input
            type="number"
            className=" h-8 w-20 border-none bg-gray-600  rounded font-light ml-2 font-xl"
          />{' '}
          -
        </span>
        <span className="font-semibold ">
          {' '}
          <input
            type="number"
            className=" h-8 w-20  border-none bg-gray-600  rounded font-light ml-2 font-xl"
          />{' '}
        </span>
      </div>

      <div className="border-b-2 border-white  w-1/2 mb-6" />
    </section>
  );
}
