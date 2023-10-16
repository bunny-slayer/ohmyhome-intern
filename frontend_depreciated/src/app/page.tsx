import Cards from '@/components/Cards';
import Header from '@/components/Header';
import Homecard from '@/components/Homecard';
import LoadMoreButton from '@/components/Loadmore';

export default function Home() {
  // Your single data object
  const singleData = {
    title: 'Sample Title',
    description: 'Sample Description',
    price: 1000,
    imageurl: 'https://api.omh.app/store/picture/2db5d27a-f29f-44ad-89a2-34201360cd6e',
  };

  // Create an array with 10 copies of the single data
  const dataArray = new Array(10).fill(singleData);

  return (
    <div>
        <Header />
        <div className="p-8 lg:p-24 xl:p-32">
        <Cards>
            {dataArray.map((data, index) => (
            <Homecard
                key={index}
                title={data.title}
                description={data.description}
                price={data.price}
                imageurl={data.imageurl}
            />
            ))}
        </Cards>
        <LoadMoreButton />
        </div>
    </div>
  );
}
