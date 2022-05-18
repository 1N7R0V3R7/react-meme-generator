import React from 'react';
import memeImg from '../images/troll-face.png'
export default function Navbar() {
    return (
        <nav className="w-full">
            <div className="container bg-gradient-to-r from-[#672280] to-[#A626D3] text-white p-6 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={memeImg} alt="Troll Face" className="mr-2 w-12 md:w-16" />
                    <p className="font-bold text-xl md:text-3xl">
                        Meme Generator
                    </p>
                </div>
                <div className="text-lg md:text-2xl md:mr-4">
                    React Course - Project 5
                </div>
            </div>
        </nav>
    )
};
