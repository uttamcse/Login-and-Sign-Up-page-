import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <h1 className="text-5xl font-bold text-white mb-10">Welcome to the Auth App</h1>
            <div className="flex space-x-4">
                <Link to="/login" className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">Login</Link>
                <Link to="/signup" className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">Signup</Link>
            </div>
        </div>
    );
}

export default Home;
