/* eslint-disable prettier/prettier */

import fotocargada from '../public/fotocargada.jpg';

export default function Banner({ title }) {
  return (
    <div className="w-full h-2/5 bg-black flex relative text-center">
      <img
        src={fotocargada.src}
        alt="vinos"
        className="w-full relative shadow-2xl border-b-2 border-black"
      />
      <h1 className="font-semibold text-9xl absolute top-32 left-1/3 text-white">
        {title}
      </h1>
    </div>
  );
}
