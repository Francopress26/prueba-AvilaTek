/* eslint-disable prettier/prettier */
import whiskymadera from '../public/whiskymadera.jpg';

export default function Ipsum() {
  return (
    <div className="w-full h-3/5 mt-6 bg-gray-700 relative text-center">
      <img
        src={whiskymadera.src}
        alt="bebidas"
        className="w-full h-full border-4 border-black"
      />
      <p className="absolute  top-1/3 text-3xl left-3 w-1/2 text-white">
        Lorem IPSUM
      </p>
      <p className="absolute  top-2/4 left-3 text-xl w-1/2 text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quod
        laudantium, vitae sunt, velit aliquid quisquam labore odio suscipit
        reiciendis asperiores eaque, autem deleniti dolore ratione minus. Non,
        exercitationem vel.
      </p>
    </div>
  );
}
