import { useState } from 'react';
import Logo from '../assets/Logo.svg'
import { IoLanguageSharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <nav className="bg-custom-background-navbar">
            <div className="w-full flex item-center justify-between mx-auto">
                <div className="flex items-center gap-4 p-4" style={{ flex: 2 }} onClick={handleLogoClick}>
                    <img src={Logo} alt="Logo" className="cursor-pointer" />
                </div>
                <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className='hidden md:flex items-end mb-5 gap-8 text-xs font-bold mr-5'>
                    <a href="#">PROPERTIES</a>
                    <a href="#">MY DASHBOARD/ACTIVITY</a>
                    <a href="#">LIST YOUR PROPERTY</a>
                    <a href="#">CONTACT US</a>
                    <a href="#">MORE</a>
                    <span className='border-l-2 border-black h-6 '></span>
                    <a href="#">
                        <IoLanguageSharp className='font-bold text-lg' />
                    </a>
                    <a href="#">
                        <CiUser className='font-bold text-lg' />
                    </a>
                </div>
            </div>
        </nav>
    )
}

const MobileSidebar = ({ isOpen, setIsOpen }) => {
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden flex">
            <button onClick={toggleSidebar} className="p-5">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <div className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col p-4 ">
                    <button onClick={toggleSidebar} className="self-end p-2">
                        <FaTimes size={24} />
                    </button>
                    <nav className="flex flex-col gap-6 mt-8 text-lg">
                        <a href="#">PROPERTIES</a>
                        <a href="#">MY DASHBOARD/ACTIVITY</a>
                        <a href="#">LIST YOUR PROPERTY</a>
                        <a href="#">CONTACT US</a>
                        <a href="#">MORE</a>
                    </nav>
                    <div className="mt-8 flex flex-col gap-4">
                        <button className="bg-gray-300 py-2 px-8 rounded flex items-center justify-between">
                            Translate
                            <IoLanguageSharp className='font-bold text-lg' />
                        </button>
                        <button className="bg-gray-300 py-2 px-8 rounded flex items-center justify-between">
                            My Account
                            <CiUser className='font-bold text-lg' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
