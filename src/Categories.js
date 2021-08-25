import React from 'react';

const Categories = ({ catagory, filteritem }) => {
  console.log(catagory);
  return (
    <div className='btn-container'>
      {catagory.map((item, index) => {
        return (
          <button className='filter-btn' onClick={() => filteritem(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
