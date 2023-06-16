import React, { useState } from 'react';
import main from './main';
import Cards from './Cards';
import Buttons from './Buttons';

const uniqueCate = [
  ...new Set(
    main.map((elem) => {
      return elem.category;
    })
  ),
  'All',

];
console.log(uniqueCate);
function Food() {
  const [item, setItem] = useState(main);
  const [menuItem, setMenu] = useState(uniqueCate);
  const filterCard = (cate) => {
    if (cate === 'All') {
      setItem(main);
      return;
    }
    const updatedCards = main.filter((curElem) => {
      return curElem.category === cate;
    });

    setItem(updatedCards);
  };
  return (
    <>
      <h1>
        <i>
          <span>H</span>amayun <span>S</span>howroom
        </i>
      </h1>
      <Buttons filterCard={filterCard} menuItem={menuItem} />
      <Cards item={item} />
    </>
  );
}

export default Food;
