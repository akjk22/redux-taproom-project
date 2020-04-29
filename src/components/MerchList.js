import React from 'react';
import Merch from './Merch';
import hoodieImg from './hoodie.jpg';
import shirtImg from './nike.jpg';

const masterMerchList = [
  {
    id: '1',
    name: 'Classic Hoodie',
    description: 'Hoodie with Stitched Print',
    quantity: '5',
    img: hoodieImg
  },
  {
    id: '2',
    name: 'Classic Tee',
    description: 'Tee with Classic Logo',
    quantity: '10',
    img: shirtImg
  }
];

function MerchList(){  
  
  return (
  <React.Fragment>
    <hr/>
    {masterMerchList.map((merch, index) =>
      <Merch id={merch.id}
        name={merch.name}
        description={merch.description}
        quantity={merch.quantity}
        img={merch.img}
        key={index}/>
    )}
  </React.Fragment>
);

}

export default MerchList;