import React from 'react';
import Keg from '../Keg';
import hefImg from './hef.jpg';
import lagunitasImg from './lagunitas.jpg';
import rogueImg from './rogue.jpg';
import avidImg from './avid.jpeg';
import pfriemImg from './pfriem.png';


const masterKegList = [
  {
    id: '1',
    name: 'Hefeweizen',
    brand: 'Widmer',
    price: '$140',
    alcoholContent: '5%',
    img: hefImg
  },
  {
    id: '2',
    name: 'A Little Sumpin Sumpin',
    brand: 'Lagunitas',
    price: '$160',
    alcoholContent: '7.5%',
    img: lagunitasImg
  },
  {
    id: '3',
    name: 'Chocolate Stout Nitro',
    brand: 'Rogue',
    price: '$220',
    alcoholContent: '5.8%',
    img: rogueImg
  },
  {
    id: '4',
    name: 'Organic Dry Cider',
    brand: 'Avid Cider Co.',
    price: '$180',
    alcoholContent: '6%',
    img: avidImg
  },
  {
    id: '5',
    name: 'Vienna Lager',
    brand: 'pFriem',
    price: '$155',
    alcoholContent: '5.3%',
    img: pfriemImg
  }
];

function KegList(){  
  
  return (
  <React.Fragment>
    <hr/>
    {masterKegList.map((keg, index) =>
      <Keg 
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        img={keg.img}
        key={index}/>
    )}
  </React.Fragment>
);

}

export default KegList;