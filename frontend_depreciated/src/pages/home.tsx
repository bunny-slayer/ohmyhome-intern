"use client"

import { JSX, useEffect, useState } from 'react';
import Cards from '@/components/Cards';
import Header from '@/components/Header';
import Homecard from '@/components/Homecard';
import LoadMoreButton from '@/components/Loadmore';

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const limit = 10;
      const offset = 0;

      // Fetch data from your API
      const response = await fetch(
        `https://m9ojazlunf.execute-api.ap-southeast-1.amazonaws.com/test?limit=${limit}&offset=${offset}`
      );

      const result = await response.json();

      if (result && result.list) {
        setData(result.list);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="p-8 lg:p-24 xl:p-32">
        <Cards>
          {data.map((item, index) => (
            <Homecard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              imageurl={item.imageurl}
            />
          ))}
        </Cards>
        <LoadMoreButton />
      </div>
    </div>
  );
}

export default Homepage;