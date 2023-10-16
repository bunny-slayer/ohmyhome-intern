import Cards from '@/components/Cards';
import Homecard from '@/components/Homecard'

export default function Home() {
  // Your single data object
  const singleData = {
      title: 'Sample Title',
      description: 'Sample Description',
      price: 100,
      imageurl: 'https://api.omh.app/store/picture/2db5d27a-f29f-44ad-89a2-34201360cd6e',
  };

  // Create an array with 10 copies of the single data
  const dataArray = new Array(10).fill(singleData);

  return (
      <div className = "p-8">
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
      </div>
  );
}
