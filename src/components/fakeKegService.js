const masterKegList = [
  {
    id: '1',
    name: 'Hefeweizen',
    brand: 'Widmer',
    price: '$140',
    alcoholContent: '5%',
    img: hoodieImg
  },
  {
    id: '2',
    name: 'A Little Sumpin Sumpin',
    brand: 'Lagunitas',
    price: '$160',
    alcoholContent: '7.5%',
    img: shirtImg
  },
  {
    id: '3',
    name: 'Chocolate Stout Nitro',
    brand: 'Rogue',
    price: '$220',
    alcoholContent: '5.8%',
    img: shirtImg
  },
  {
    id: '4',
    name: 'Organic Dry Cider',
    brand: 'Avid Cider Co.',
    price: '$180',
    alcoholContent: '6%',
    img: shirtImg
  },
  {
    id: '5',
    name: 'Vienna Lager',
    brand: 'pFriem',
    price: '$155',
    alcoholContent: '5.3%',
    img: shirtImg
  }
];

export function KegList(){
    return masterKegList;
}