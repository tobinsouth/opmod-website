import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBezierCurve, faBook, faDatabase, faBriefcase, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
// Import fontawesome github
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/opmodLogo.svg';


function App() {
  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-gray-950 text-black items-center'>
      <header className="border-b border-gray-100">
        <div className="w-full px-4 lg:px-6 xl:container flex items-center h-16">
          {/* Company Logo */}
          <div className="flex flex-1 items-center">
            <Link to="/" className="flex flex-none items-center mr-5 lg:mr-6">
              <img src={logo} alt="Logo for opmod" className="h-8 w-auto" />
              {/* <span className="hidden text-lg font-bold whitespace-nowrap md:block">opmod</span> */}
            </Link>
          </div>
          {/* Search Bar */}
          <div className="relative flex-1 lg:max-w-sm mr-2 sm:mr-4 lg:mr-6">
            <div className="relative w-full max-w-xs">
              <input autoComplete="off" type="text" className="w-full dark:bg-gray-950 form-input-alt h-9 pl-8 pr-3 focus:shadow-xl" placeholder="Search" />
                <svg className="absolute left-2.5 top-2.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                <path d="M30 28.59L22.45 21A11 11 0 1 0 21 22.45L28.59 30zM5 14a9 9 0 1 1 9 9a9 9 0 0 1-9-9z" fill="currentColor"/>
                </svg>
            </div>
          </div>
          {/* Nav Bar */}
          <nav className="ml-auto hidden lg:block" aria-label="Main">
            <ul className="flex items-center space-x-2">
              <li><Link to="/models" className="flex items-center group px-2 py-0.5 dark:hover:text-gray-400 hover:text-indigo-700"><FontAwesomeIcon  aria-hidden="true" focusable="false" className="mr-1.5 text-gray-400 group-hover:text-indigo-500" icon={faBezierCurve}/>Models</Link></li>
              <li><Link to="/datasets" className="flex items-center group px-2 py-0.5 dark:hover:text-gray-400 hover:text-indigo-700"><FontAwesomeIcon  aria-hidden="true" focusable="false" className="mr-1.5 text-gray-400 group-hover:text-indigo-500" icon={faDatabase}/>Datasets</Link></li>
              <li><Link to="/docs" className="flex items-center group px-2 py-0.5 dark:hover:text-gray-400 hover:text-indigo-700"><FontAwesomeIcon  aria-hidden="true" focusable="false" className="mr-1.5 text-gray-400 group-hover:text-indigo-500" icon={faBook}/>Docs</Link></li>
              <li><Link to="/solutions" className="flex items-center group px-2 py-0.5 dark:hover:text-gray-400 hover:text-indigo-700"><FontAwesomeIcon  aria-hidden="true" focusable="false" className="mr-1.5 text-gray-400 group-hover:text-indigo-500" icon={faBriefcase}/>Solutions</Link></li>
              <li><Link to="/people" className="flex items-center group px-2 py-0.5 dark:hover:text-gray-400 hover:text-indigo-700"><FontAwesomeIcon  aria-hidden="true" focusable="false" className="mr-1.5 text-gray-400 group-hover:text-indigo-500" icon={faPeopleGroup}/>People</Link></li>
              <li><Link to="https://github.com/tobinsouth" className="flex items-center group px-2 py-0.5 dark:hover:text-gray-400 hover:text-indigo-700"><FontAwesomeIcon  aria-hidden="true" focusable="false" className="mr-1.5 text-gray-400 group-hover:text-indigo-500" icon={faGithub}/>Github</Link></li>
              <li><hr className="w-0.5 h-5 border-none bg-gray-100 dark:bg-gray-800"/></li>
              <li><a className="px-2 py-0.5 block cursor-pointer hover:text-gray-500 dark:hover:text-gray-400" href="/login">Log In</a></li>
              <li><a className="ml-2 btn" href="/join">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex flex-col flex-1">
        <Outlet />
      </main> 
    </div>
  );
}

export default App;
