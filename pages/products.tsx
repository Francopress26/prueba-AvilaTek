/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Image from 'next/image';
import { GetStaticProps } from 'next';

import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Ulist2 from '../components/Ulist2';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import Sidebar from '../components/Sidebar';
import Card from '../components/productCard';
import getDrinks from '../lib';

export default function Products({ drinksByName, allDrinks }) {
  /* eslint-disable prettier/prettier */
  const [drinksFiltered, setDrinksFiltered] = useState(allDrinks);
  const [currentPage, setCurrentPage] = useState(1);
  const DrinksPerPage = 10;
  const indexOfLastDrink = currentPage * DrinksPerPage;
  const indexOfFirstDrink = indexOfLastDrink - DrinksPerPage;
  const currentDrinks = drinksFiltered.slice(
    indexOfFirstDrink,
    indexOfLastDrink
  );
  const totalPage = Math.ceil(drinksFiltered.length / DrinksPerPage);

  return (
    <>
      <Ulist2 />
      <Banner title="Productos" />
      <div className="flex ">
        <Sidebar
          setDrinksFiltered={setDrinksFiltered}
          allDrinks={allDrinks}
          drinksByName={drinksByName}
          setCurrentPage={setCurrentPage}
        />
        <div className=" flex flex-col w-full items-center justify-around m-6">
          <Pagination
            count={totalPage}
            onChange={(e, value) => setCurrentPage(value)}
          />

          <div className="flex flex-wrap items-center justify-center m-6 w-auto">
            {currentDrinks?.map((el) => (
              <Card el={el} key={el.id} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLA/search?category=';
  const categorias = [
    'MLA73725',
    'MLA73729',
    'MLA40995',
    'MLA1416',
    'MLA10511',
    'MLA403656',
    'MLA1404',
  ].map((category) => url + category);

  const resultado = await Promise.all(
    categorias.map(async (link) =>
      (await axios(link)).data.results.slice(0, 10)
    )
  );
  const allDrinks = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < 7; index++) {
    resultado[index].forEach((element) => {
      allDrinks.push({
        id: element.id,
        categoryId: element.category_id,
        title: element.title,
        thumbnail: element.thumbnail,
        price: element.price,
        available: element.available_quantity,
      });
    });
  }
  console.log(allDrinks);
  const drinksByName = await getDrinks();

  return {
    props: {
      drinksByName,
      allDrinks,
    },
  };
};
