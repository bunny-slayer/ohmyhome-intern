interface HomecardProps {
    title: string;
    description: string;
    price: number;
    imageurl: string;
}

import Image from 'next/image';

const Homecard = ({ title, description, imageurl, price }: HomecardProps) => {
    return (
        <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
            <div className="w-full relative">
                <Image
                    src={imageurl}
                    alt={title}
                    width={500}
                    height={500}
                    className='rounded-xl'
                />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-left">
                {title}
            </h2>
            <p className="mt-4 max-w-[30ch] text-sm opacity-50 text-left">
                {description}
            </p>
            <p className ="mt-2">
                {price}
            </p>
        </div>
    );
}

export default Homecard;

