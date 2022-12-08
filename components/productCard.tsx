/* eslint-disable prettier/prettier */
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import Link from 'next/link';

export default function Card({ el }) {
  return (
    <Link
      href={`/product/${el.id}`}
      className="flex items-center justify-center w-1/4"
    >
      <div
        className="flex  flex-col justify-around w-full m-2 p-2 h-96"
        key={el.id}
      >
        <div className="w-1/2">
          <img src={el.thumbnail} alt={el.title} className="w-full ml-12" />
        </div>
        <div className="flex  flex-col w-full justify-start items-start">
          <h3 className="text-center  text-gray-900 font-bold w-3/4">
            {el.title}
          </h3>
          <div className="flex flex-row gap-12 items-center text-center w-full mt-2 mb-2">
            <span className="text-primary-100 font-bold text-center text-xl w-2/5">
              ${el.price}
            </span>
            <button type="button">
              <MdOutlineAddShoppingCart className="text-primary-100 text-3xl w-full h-full" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
