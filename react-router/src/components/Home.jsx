import React from 'react'
import { Link } from 'react-router';

function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-5 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-3xl font-bold lg:text-4xl">
                            Download Now
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-56 lg:w-80" src="https://png.pngtree.com/png-vector/20240314/ourmid/pngtree-family-vacation-vector-concept-black-illustration-png-image_11949775.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="w-56 lg:w-80" src="http://clipart-library.com/img/1743714.png" alt="image2" />
            </div>
            <div className='text-center text-4xl py-10'>
                <span className='text-gray-600 text-4xl lg:text-5xl font-bold'>Wander</span>
                <span className='text-red-700 text-4xl lg:text-5xl font-bold'>Wise</span>
            </div>
        </div>
    );
}


export default Home
