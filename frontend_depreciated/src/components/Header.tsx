import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex items-center justify-center bg-white shadow-md p-4">
            <Image
                src="/logo.png"
                alt="Logo"
                width={128}
                height={128}
            />
        </header>
    );
};

export default Header;