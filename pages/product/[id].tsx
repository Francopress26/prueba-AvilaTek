/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetServerSideProps, GetStaticProps } from 'next';
import axios from 'axios';
import bebidas from '../../public/bebidas.jpg';
import Ulist2 from '../../components/Ulist2';
import Banner from '../../components/Banner';
import Footer from '../../components/footer';

export default function Product() {
  // const {id}=useParams()
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);
  useEffect(() => {
    axios
      .get(`https://api.mercadolibre.com/items?ids=${id}`)
      .then((resp) => setItem(resp.data[0].body));

    console.log(item);
  }, [id]);
  const origen = item?.attributes
    ? item?.attributes[10]?.value_name
    : 'Argentina';

  return (
    <>
      <Ulist2 />
      <Banner title="Producto" />

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center  items-center w-5/6 h-1/2 ">
          <div className="text-sm flex flex-col justify-center items-center w-5/6 mb-6">
            <span className="text-gray-500 font-semibold uppercase">
              Inicio / Productos / {item?.title}
            </span>

            <img
              src={item?.pictures[0].url}
              alt="detail bebida"
              className="w-[400px] h-[450px] rounded"
            />
          </div>

          <div className="pt-16 flex flex-col">
            <span className="font-black text-5xl w-96">{item?.title}</span>
            <span className="font-semibold text-xl pt-3">{origen}</span>
            <div className="flex flex-row items-end  pt-6">
              <span className="text-2xl font-black text-bodebar-500 mr-6 text-amber-900">
                ${item?.price}
              </span>
              <span className="font-bold text-gray-400 line-through">
                {/*  eslint-disable-next-line no-unsafe-optional-chaining */}$
                {item?.price + item?.price / 2}
              </span>
            </div>

            <div className="flex flex-row pt-20">
              <button type="button" className="border text-2xl px-3">
                +
              </button>
              <input
                type="number"
                step="1"
                defaultValue={1}
                className="p-1 w-14 text-center border-gray-200"
              />
              <button type="button" className="border text-2xl px-3">
                +
              </button>
            </div>
            <button
              type="button"
              className="bg-amber-800 mt-6  w-40 text-white p-2 shadow-2xl rounded"
            >
              AGREGAR
            </button>
          </div>
        </div>

        <div className=" p-4 mt-20 flex items-center text-sm font-bold w-5/6">
          <span className=" border-b-2 w-1/3 text-center text-xl text-gray-400">
            DESCRIPCION
          </span>
          <span className=" border-b-2 w-1/3 text-center text-xl text-gray-400">
            FICHA TECNICA
          </span>
          <span className=" border-b-2 w-1/3 text-center text-xl text-gray-400">
            COMENTARIOS
          </span>
        </div>
        <div className="w-2/3 p-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          phasellus nullam facilisis quis commodo risus. Auctor vel ac,
          malesuada et sit. Diam eget porttitor sit vestibulum elementum amet,
          fringilla nibh. Et nunc, imperdiet natoque diam, etiam ligula
          tincidunt scelerisque quis. Ut faucibus proin morbi sagittis vitae
          tincidunt. Facilisis non lectus dictum nunc, auctor. At feugiat dui
          faucibus arcu. Praesent faucibus sit blandit felis in orci. Mauris
          ipsum mattis enim sed eu.
        </div>
      </div>

      <Footer />
    </>
  );
}
