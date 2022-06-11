import React from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/motif.svg';

// A simple home screen
export default function HomePage() {
    return (
        <div className="flex-1">
            {/* Opener container */}
            <div className="container text-center pb-32 2xl:pb-40 2xl:pt-32 pt-28">
                <img className="mb-4 mx-auto w-24 h-24" src={logo} alt="Main Logo"/>
                <h1 className="text-4xl md:text-6xl font-bold mx-auto max-w-xl text-gray-900 dark:text-gray-100">Building the future of government data&nbsp;science</h1>
                <p className="text-lg text-gray-500 max-w-md mx-auto mt-6">Deploy state of the art data science tools to solve real-world problems.</p>
            </div>
        </div>
    )
};
