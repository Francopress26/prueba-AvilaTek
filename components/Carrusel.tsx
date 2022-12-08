/* eslint-disable prettier/prettier */

import fondonegro from '../public/fondonegro.jpg';
import martiniagua from '../public/martiniagua.jpg';
import tresvasos from '../public/tresvasos.jpg';
import barirlanda from '../public/barirlanda.jpg';
import cervezaservida from '../public/cervezaservida.jpg';
import bar from '../public/bar.jpg';

export default function Carrusel({ imgActual, setImgActual }) {
  const imgs = [barirlanda, cervezaservida, bar];
  const handleClick = (e) => {
    if (e.target.value === '1') {
      setImgActual(0);
    } else if (e.target.value === '2') {
      setImgActual(1);
    } else {
      setImgActual(2);
    }
    setTimeout(function () {
      setImgActual(0);
    }, 5000);
  };

  return (
    <div className="w-full h-4/6 bg-black flex relative">
      <img
        src={imgs[imgActual].src}
        alt="vinos"
        className="w-full relative shadow-2xl border-b-2 border-black"
      />
      <button
        value="1"
        type="button"
        className="absolute bottom-0 left-1/3 bg-white text-white mb-6 rounded-full w-6 h-6"
        onClick={(e) => handleClick(e)}
      >
        1
      </button>
      <button
        value="2"
        type="button"
        className="absolute bottom-0 left-1/2 bg-white text-white mb-6 rounded-full w-6 h-6"
        onClick={(e) => handleClick(e)}
      >
        2
      </button>
      <button
        value="3"
        type="button"
        className="absolute bottom-0 left-2/3 bg-white text-white mb-6 rounded-full w-6 h-6"
        onClick={(e) => handleClick(e)}
      >
        3
      </button>
    </div>
  );
}
