import React, { useState } from 'react';

type LoadMoreButtonProps = {
  loadMore: () => void; // A function to load more data
};

const LoadMoreButton = ({ loadMore }: LoadMoreButtonProps) => {
    return (
      <button
      className="justify-center items-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange- focus:outline-none "
        onClick={loadMore}
        >
            Load More
        </button>
    );
};

export default LoadMoreButton;