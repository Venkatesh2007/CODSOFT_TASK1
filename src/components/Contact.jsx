import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Popup from './Popup'; // Adjust the path as necessary

const Contact = () => {
  const [result, setResult] = useState("");
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "490cbc1a-67af-49e1-9642-2fa47c61bb4c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully");
      setPopupIsOpen(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setPopupIsOpen(true);
    }
  };

  const closePopup = () => {
    setPopupIsOpen(false);
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 text-white min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 name">Contact Me</h1>
        <div className="max-w-xl mx-auto p-8 bg-white bg-opacity-10 border border-opacity-20 rounded-lg shadow-glassmorphism grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 rounded-lg shadow-inner-glassmorphism">
            <h2 className="text-2xl font-semibold mb-4 title">GET IN TOUCH</h2>
            <form onSubmit={onSubmit}>
              <label className="block mb-4">
                <span className="block text-xl font-semibold mb-2 text-gradient-pink-purple title">Name:</span>
                <input type="text" name="name" className="w-full p-2 border border-gray-300 bg-transparent rounded shadow-inner-glassmorphism" required />
              </label>
              <label className="block mb-4">
                <span className="block text-xl font-semibold mb-2 text-gradient-pink-purple title">Email:</span>
                <input type="email" name="email" className="w-full p-2 border border-gray-300 bg-transparent rounded shadow-inner-glassmorphism" required />
              </label>
              <label className="block mb-4">
                <span className="block text-xl font-semibold mb-2 text-gradient-pink-purple title">Message:</span>
                <textarea name="message" className="w-full p-2 border border-gray-300 bg-transparent rounded shadow-inner-glassmorphism" required></textarea>
              </label>
              <button type="submit" className="w-full bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-200">Submit</button>
            </form>
            <span>{result}</span>
          </div>
          <div className="p-4 rounded-lg shadow-inner-glassmorphism flex flex-col justify-start">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2 title">CONTACT INFO</h2>
              <div className="flex items-center">
                <div className="neumorphic-circle border-2 border-white rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 w-12 h-12 flex items-center justify-center p-1 mr-2">
                  <a href="mailto:badamvenkatesh2007@gmail.com">
                    <FaEnvelope className="text-white text-lg" />
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gradient-pink-purple title">Email</h3>
                  <p className="text-xs text-gradient-pink-purple description">badamvenkatesh2007@gmail.com</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-2 title">Visit my social profile and get connected:</p>
                <div className="flex items-center">
                  <div className="neumorphic-circle border-2 border-white rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 w-12 h-12 flex items-center justify-center mr-4">
                    <a href="https://github.com/Venkatesh2007" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-white text-lg" />
                    </a>
                  </div>
                  <div className="neumorphic-circle border-2 border-white rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 w-12 h-12 flex items-center justify-center">
                    <a href="https://linkedin.com/in/badamvenkatesh" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn className="text-white text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {popupIsOpen && <Popup message={result} closePopup={closePopup} />}
    </div>
  );
};

export default Contact;
