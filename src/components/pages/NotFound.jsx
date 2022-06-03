import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonCircleExclamation } from '@fortawesome/free-solid-svg-icons'

// A simple 404 page
export default function NotFound() {
    return (
        <div className="flex-1">
            {/* Opener container */}
            <div className="container text-center pb-32 2xl:pb-40 2xl:pt-32 pt-28">
                <FontAwesomeIcon  aria-hidden="true" focusable="false" className="mb-4 mx-auto w-24 h-24" icon={faPersonCircleExclamation}/>
                <h1 className="text-4xl md:text-6xl font-bold mx-auto max-w-xl text-gray-900 dark:text-gray-100">Whoops, this page doesn't exist right now</h1>
                <p className="text-lg text-gray-500 max-w-md mx-auto mt-6">Maybe it's still under development, or maybe you just went to the wrong page.Hope you can find your way out of here!</p>
            </div>
        </div>
    )
};
