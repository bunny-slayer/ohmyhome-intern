interface HomecardProps {
    title: string;
    description: string;
    price: number;
    imageurl: string;
}

import Image from 'next/image';

const Homecard = ({ title, description, imageurl, price }: HomecardProps) => {
    // Format the price with commas and ".00"
    const formattedPrice = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    return (
        <div className="mb-2 lg:mb-14 text-center lg:max-w-5xl lg:w-full lg:text-left">
            <div className="w-full relative">
                <Image
                    src={imageurl}
                    alt={title}
                    width={500}
                    height={300}
                    className='rounded-xl object-cover h-60 lg:h-40'
                />
            </div>
            <h2 className="mt-4 lg:mt-6 text-2xl font-semibold text-left">
                {title}
            </h2>
            <p className="mt-3 max-w-[30ch] text-sm opacity-50 text-left">
                {description}
            </p>
            <p className="mt-2 text-left font-semibold">
                ${formattedPrice}
            </p>
        </div>
    );
}

export default Homecard;