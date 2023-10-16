import Cards from '@/components/Cards';
import Header from '@/components/Header';
import Homecard from '@/components/Homecard';
import LoadMoreButton from '@/components/Loadmore';
import { fetchData } from '@/provider/api';

export default function Home({ data }) {
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

export const getServerSideProps = async () => {
    // Define your limit and offset values
    const limit = 10; // The number of items you want to retrieve
    const offset = 0; // The starting index in the list
  
    // Fetch data from your API using the fetchData function or Axios
    const response = await fetchData({
      limit, // Pass the limit as a query parameter
      offset, // Pass the offset as a query parameter
      /* other query parameters here if needed */
    });
  
    const data = response.data; // Adjust this based on your API response structure
  
    return {
      props: {
        data: data.list, // Assuming the API response contains a "list" array
      },
    };
  };