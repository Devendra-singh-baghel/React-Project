import React from 'react';

function Loader() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
    );
}

export default Loader;
