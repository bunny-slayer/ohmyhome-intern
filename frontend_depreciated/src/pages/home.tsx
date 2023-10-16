"use client"

import { useEffect, useState } from 'react';
import Cards from '@/components/Cards';
import Header from '@/components/Header';
import Homecard from '@/components/Homecard';
import LoadMoreButton from '@/components/Loadmore';
import InfiniteScroll from 'react-infinite-scroll-component';

const Homepage = () => {
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(10); // Initial number of items to display
  const [totalProperties, setTotalProperties] = useState(0);

  useEffect(() => {
    fetchData(0, visibleItems);
  }, []);

  const fetchData = async (offset: number, limit: number) => {
    const response = await fetch(
      `https://m9ojazlunf.execute-api.ap-southeast-1.amazonaws.com/test?limit=${limit}&offset=${offset}`
    );
    const result = await response.json();

    if (result && result.list) {
      setData(result.list);
      setTotalProperties(result.totalProperties);
    }
  };

  const handleLoadMore = () => {
    // Load 4 more items when the "Load More" button is clicked
    const newVisibleItems = visibleItems + 4;
    fetchData(visibleItems, newVisibleItems);
    setVisibleItems(newVisibleItems);
  };

  return (
    <div>
      <Header />
      <div className="p-8 lg:p-24 xl:p-32">
        <Cards>
          {data.slice(0, visibleItems).map((item, index) => (
            <Homecard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              imageurl={item.imageurl}
            />
          ))}
        </Cards>
        {visibleItems < totalProperties && (
          <LoadMoreButton loadMore={handleLoadMore} />
        )}
      </div>
    </div>
  );
};

export default Homepage;