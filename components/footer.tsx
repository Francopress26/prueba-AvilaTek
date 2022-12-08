/* eslint-disable prettier/prettier */
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center h-40 bg-gray-800 justify-evenly w-full font-sans">
      <div className="flex  justify-between w-11/12 p-4  text-white h-1/2 m-4 text-xl">
        <Link href="/" className="m-1">
          Inicio
        </Link>
        <Link href="/" className="m-1">
          Productos
        </Link>
        <Link href="/" className="m-1">
          Nosotros
        </Link>
        <Link href="/" className="m-1">
          Terminos y Condiciones
        </Link>
        <Link href="/" className="m-1">
          Preguntas Frecuentes
        </Link>
        <Link href="/" className="m-1">
          Cuenta
        </Link>
      </div>
      <div className="text-white">
        <p>Derechos reservados @Avila Tek 2022</p>
      </div>
    </footer>
  );
}

// className = 'flex  justify-between  p-4 w-max text-white h-1/2 m-4 text-xl';
