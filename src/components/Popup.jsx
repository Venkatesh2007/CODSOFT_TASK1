import React from 'react';

const Popup = ({ message, closePopup }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-sm mx-auto z-10">
                <h2 className="text-2xl font-semibold mb-4 text-white title">{message}</h2>
                <button
                    onClick={closePopup}
                    className="w-full bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-200 description"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;
