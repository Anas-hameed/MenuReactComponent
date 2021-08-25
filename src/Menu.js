import React, { useState } from 'react';
const Menu = ({ items }) => {
  const [toogle, settoogle] = useState(false);
  return (
    <div className='section-center'>
      {items.map((item) => {
        const { id, price, title, img, desc } = item;
        return (
          <article key={id} className='menu-item'>
            <img className='photo' src={img} alt={title} />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
