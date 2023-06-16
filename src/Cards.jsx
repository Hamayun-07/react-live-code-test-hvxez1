import React from 'react';
function Cards({ item }) {
  return (
    <>
      <div className="container">
        <div className="cards">
          {item.map((elem) => {
            const { id, image, name, bio, button, price } = elem;

            return (
              <>
                <div className="box" key={id}>
                  <div className="image">
                    <img src={image} />
                  </div>
                  <div className="name">{name}</div>
                  <p>{bio}</p>
                  <div className="flex">
                    <div className="price">
                      price: <span>{price}</span>
                    </div>
                    <div className="button">
                      <button>{button}</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
