"use client";

import { useEffect, useState } from 'react';
import Cards from '@/components/Cards';
import Header from '@/components/Header';
import Homecard from '@/components/Homecard';
import LoadMoreButton from '@/components/Loadmore';

const Homepage = () => {
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(10); // Initial number of items to display
  const [totalProperties, setTotalProperties] = useState(0);
  const [loading, setLoading] = useState(false); // For indicating loading state

  useEffect(() => {
    fetchData(0, visibleItems);
    // Add a scroll event listener for infinite scrolling on mobile
    if (window.innerWidth <= 768) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Only run this effect on initial render

  const fetchData = async (offset: number, limit: number) => {
    if (loading) return; // Prevent making multiple requests while loading

    setLoading(true); // Set loading state
    const response = await fetch(
      `https://m9ojazlunf.execute-api.ap-southeast-1.amazonaws.com/test?limit=${limit}&offset=${offset}`
    );
    const result = await response.json();

    if (result && result.list) {
      setData((prevData) => [...prevData, ...result.list]);
      setTotalProperties(result.totalProperties);
    }

    setLoading(false); // Reset loading state
  };

  const handleLoadMore = () => {
    if (loading) return; // Prevent clicking multiple times while loading

    // Load 4 more items when the "Load More" button is clicked
    const newVisibleItems = visibleItems + 4;
    fetchData(visibleItems, newVisibleItems);
    setVisibleItems(newVisibleItems);
  };

  const handleScroll = () => {
    if (loading) return; // Prevent making multiple requests while loading

    // Implement infinite scrolling for mobile
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 200
    ) {
      const newVisibleItems = visibleItems + 4;
      fetchData(visibleItems, newVisibleItems);
    }
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
        {visibleItems < totalProperties && window.innerWidth > 768 && (
          <LoadMoreButton loadMore={handleLoadMore} />
        )}
        {loading && <p>Loading...</p>} {/* Display loading indicator */}
      </div>
    </div>
  );
};

export default Homepage;
