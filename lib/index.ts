/* eslint-disable prettier/prettier */
import axios from 'axios';

interface drink {
  available: number;
  categoryId: string;
  id: string;
  price: number;
  thumbnail: string;
  title: string;
}

export interface drinks {
  Brandy: drink[];
  Cognac: drink[];
  Gin: drink[];
  Licor: drink[];
  Whisky: drink[];
  Beer: drink[];
  Wine: drink[];
}

export default async function getDrinks() {
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

  const allDrinksFiltered = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < 7; index++) {
    const bebidas = [];
    resultado[index].forEach((element) => {
      bebidas.push({
        id: element.id,
        categoryId: element.category_id,
        title: element.title,
        thumbnail: element.thumbnail,
        price: element.price,
        available: element.available_quantity,
      });
    });
    allDrinksFiltered.push(bebidas);
  }
  const drinksByName: drinks = {
    Brandy: allDrinksFiltered[0],
    Cognac: allDrinksFiltered[1],
    Gin: allDrinksFiltered[2],
    Licor: allDrinksFiltered[3],
    Whisky: allDrinksFiltered[4],
    Beer: allDrinksFiltered[5],
    Wine: allDrinksFiltered[6],
  };
  return drinksByName;
}
