import React from 'react';
function Buttons({ filterCard, menuItem }) {
  return (
    <>
      <div className="button_flex">
        {menuItem.map((curElem) => {
          return <button onClick={() => filterCard(curElem)}>{curElem}</button>;
        })}
      </div>
    </>
  );
}

export default Buttons;
