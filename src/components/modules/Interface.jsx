import { Outlet, Link } from "react-router-dom";
import Header from '../modules/Header';

function Interface() {
    return (
        <div className='flex flex-col min-h-screen bg-white dark:bg-gray-950 text-black items-center'>
            <Header />
            <main className="flex flex-col flex-1">
            <Outlet />
            </main> 
        </div>  
    );
}

export default Interface;

