/* eslint-disable prettier/prettier */
import Link from 'next/link';

export default function Ulist({
  setProducts,
  setImgCarrusel,
  setTitleProd,
  drinks,
}) {
  const handleProducts = (value: string) => {
    setProducts(drinks[value]);
    setImgCarrusel(drinks[value].slice(0, 3));
    setTitleProd(value);
  };
  return (
    <ul className="flex justify-between items-center p-2 bg-amber-800 h-10 text-white border-b-2 border-black">
      <li className="cursor-pointer">
        <Link href="/#products" onClick={() => handleProducts('Whisky')}>
          Whisky
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link href="/#products" onClick={() => handleProducts('Beer')}>
          Cerveza
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link href="/#products" onClick={() => handleProducts('Wine')}>
          Vinos
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link href="/#products" onClick={() => handleProducts('Brandy')}>
          Brandy
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link href="/#products" onClick={() => handleProducts('Licor')}>
          Licores
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link href="/#products" onClick={() => handleProducts('Gin')}>
          Gin
        </Link>
      </li>
      <li className=" pr-2 cursor-pointer">
        <Link href="/#products" onClick={() => handleProducts('Cognac')}>
          Cognac
        </Link>
      </li>
    </ul>
  );
}
