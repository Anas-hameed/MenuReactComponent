import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCatagory = [
  'all',
  ...new Set(
    items.map((its) => {
      return its.category;
    })
  ),
];

function App() {
  const [menu, setMenu] = useState(items);
  const [catagory, setCatagory] = useState(allCatagory);
  const filteritem = (cata) => {
    if (cata === 'all') {
      setMenu(items);
      return;
    }
    const item = items.filter((item) => item.category == cata);
    setMenu(item);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
      </section>
      <Categories catagory={catagory} filteritem={filteritem} />
      <Menu items={menu} />
    </main>
  );
}

export default App;
