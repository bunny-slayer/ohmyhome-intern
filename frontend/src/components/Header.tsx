import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex items-center justify-center bg-white shadow-md p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
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