import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Navbar from '../components/NavBar';
import foodItems from '../data/foodData';
import foodCategory from '../data/foodCategory';
import PaddingTop from '../components/PaddingTop';
import './Menu.css';
import FloatingCart from '../components/FloatingCart';
import Loading from '../components/Loading';


const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Navbar />
      <PaddingTop>
        <div className="container">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {foodCategory.map((category) => (
            <div key={category.CategoryName}>
              <div className="fs-3 mt-5 mb-3">{category.CategoryName}</div>
              <hr
                className="mb-4"
                style={{
                  height: '4px',
                  backgroundImage:
                    '-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))',
                }}
              />
              <div className="row">
                {foodItems
                  .filter((item) => item.CategoryName === category.CategoryName)
                  .filter((item) =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((item) => (
                    <div key={item.id} className="col-12 col-md-6 col-lg-3">
                      {isLoading || item.isLoading ? (
                        <Loading />
                      ) : (
                        <Card foodItem={item} options={item.options[0]} />
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <FloatingCart />
      </PaddingTop>
    </>
  );
};

export default Menu;
