/* eslint-disable prettier/prettier */
export default function Seller({ imgCarrusel }) {
  return (
    <div className="flex  items-center justify-center bg-red w-full h-1/2 mt-6 flex-wrap ">
      <h2 className="w-full text-center mt-6  text-5xl  text-gray-400 ">
        Best sellers
      </h2>
      {/* <div>{drinks?.beer[1]?.title}</div> */}
      {/*  eslint-disable-next-line react/destructuring-assignment */}
      <div className="flex w-full justify-between">
        {imgCarrusel.length > 0 &&
          imgCarrusel.map((el, index) => (
            <div
              key={index}
              className="flex flex-col w-full justify-center items-center m-6  border border-black rounded shadow-xl"
            >
              <img
                src={el.thumbnail}
                alt="drink"
                className=" w-72 h-5/6  mb-2"
              />
              <p className="font-semibold font-2xl bg-amber-800 h-12 text-center rounded p-2 mb-2">
                {el.title}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
