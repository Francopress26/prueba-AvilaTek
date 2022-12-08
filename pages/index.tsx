/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Footer from '../components/footer';
import Seller from '../components/bestSeller';
import Card from '../components/productCard';
import Ipsum from '../components/Ipsum';
import Ulist from '../components/Ulist';
import Carrusel from '../components/Carrusel';
import getDrinks from '../lib';

function HomePage({ drinks }) {
  //  1er carrusel
  const [imgActual, setImgActual] = useState(0);

  //  best seller
  const [slice, setSlice] = useState(0);
  const [titleProd, setTitleProd] = useState('Beer');
  const [imgCarrusel, setImgCarrusel] = useState(drinks.Beer.slice(0, 3));

  // products
  const [products, setProducts] = useState(drinks.Beer);

  const MINUTE_MS = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (slice + 3 > 9) {
        setSlice(0);
        setImgCarrusel(products.slice(0, 3));
      } else {
        setSlice(slice + 3);
        setImgCarrusel(products.slice(slice, slice + 3));
      }
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [products, imgCarrusel, slice]);

  return (
    <>
      <Ulist
        setProducts={setProducts}
        setImgCarrusel={setImgCarrusel}
        setTitleProd={setTitleProd}
        drinks={drinks}
      />

      <Carrusel imgActual={imgActual} setImgActual={setImgActual} />

      <Seller imgCarrusel={imgCarrusel} />

      <Ipsum />

      <div
        className="h-full mt-6 flex items-center flex-col mb-24"
        id="products"
      >
        <div className="w-full h-1/6 text-center">
          <h3 className="text-5xl">{titleProd}</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center m-4 ml-4">
          {products.map((el) => (
            <Card el={el} />
          ))}
        </div>
      </div>
      <div className="h-80" />

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const drinks = await getDrinks();
  return {
    props: {
      drinks,
    },
  };
};

export default HomePage;
