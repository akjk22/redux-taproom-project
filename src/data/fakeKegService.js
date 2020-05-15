import { v4 } from 'uuid';

const masterKegList = [
  {
    id: v4(),
    name: 'Hefeweizen',
    brand: 'Widmer',
    price: '$140',
    alcohol: '5%',
    count: 1,
  },
  {
    id: v4(),
    name: 'A Little Sumpin Sumpin',
    brand: 'Lagunitas',
    price: '$160',
    alcohol: '7.5%',
    count: 124
  },
  {
    id: v4(),
    name: 'Chocolate Stout Nitro',
    brand: 'Rogue',
    price: '$220',
    alcohol: '5.8%',
    count: 124,
  },
  {
    id: v4(),
    name: 'Organic Dry Cider',
    brand: 'Avid Cider Co.',
    price: '$180',
    alcohol: '6%',
    count: 124
  },
  {
    id: v4(),
    name: 'Vienna Lager',
    brand: 'pFriem',
    price: '$155',
    alcohol: '5.3%',
    count: 124
  }
];

export function FakeKegList(){
    return masterKegList;
}