/* eslint-disable prettier/prettier */
interface drink {
  available: number;
  categoryId: string;
  id: string;
  price: number;
  thumbnail: string;
  title: string;
}

interface drinks {
  brandy: drink[];
  cognac: drink[];
  gin: drink[];
  licors: drink[];
  whiskies: drink[];
  beer: drink[];
  wines: drink[];
}

export { drink, drinks };
