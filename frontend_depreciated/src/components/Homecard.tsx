interface HomecardProps {
    title: string;
    description: string;
    price: number;
    imageurl: string;
}

import Image from 'next/image';

const Homecard = ({ title, description, imageurl }: HomecardProps) => {
    return (
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <div className="h-full w-full relative">
                    <Image
                        src={imageurl}
                        alt={title}
                        width = {100}
                        height = {100}
                    />
            </div>
            <h2 className="mb-3 text-2xl font-semibold">
                {title}
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
                {description}
            </p>
        </div>
    );
}

export default Homecard;