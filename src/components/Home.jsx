import React from 'react';
import Typewriter from 'typewriter-effect'; // Importing Typewriter effect library
import { FaGithub, FaLinkedin, FaEnvelope, FaCloudDownloadAlt } from 'react-icons/fa'; // Importing icons
import BadamImage from '../assets/images/Developer.png'; // Importing the image
import resume from '../assets/pdfs/RESUME.pdf';

const Home = () => (
    <div className="bg-violet-purple h-[80vh] flex items-center justify-center relative">
        <div className="container mx-auto p-4 flex items-center justify-center md:flex-row flex-col relative z-10">
            <div className="md:w-1/2 w-full pr-8">
                <img src={BadamImage} alt="Badam Venkatesh" className="w-full rounded-lg" />
            </div>
            <div className="md:w-1/2 w-full pl-8 pt-2">
                <div className="mb-4 handwritten text-4xl">
                    <Typewriter
                        options={{
                            strings: ['Hi There', 'नमस्ते', 'Hola', 'Bonjour', 'Ciao', "Hallo"],
                            autoStart: true,
                            loop: true,
                        }}
                        className="text-4xl font-bold name"
                    />
                </div>
                <p className="text-2xl font-bold mb-2 name">I AM <span className='text-slate-800'>BADAM VENKATESH</span></p>
                <p className="text-lg mb-4 description">I'm a web developer with a passion for creating innovative solutions and beautiful user interfaces. With a strong background in React and Flutter, I've worked on a variety of projects ranging from attendance systems to e-commerce solutions.</p>
                <div className="flex items-center">
                    <a
                        href={resume}
                        download="RESUME_PORTFOLIO.pdf"
                        className="hover:bg-indigo-700 text-white font-bold py-1 px-3 rounded-full flex flex-row items-center shadow-thin-neon-violet"
                    >
                        Resume
                        <FaCloudDownloadAlt className="ml-1" />
                    </a>
                    <div className="ml-4 flex space-x-4">
                        <a href="https://github.com/Venkatesh2007" target="_blank" rel="noopener noreferrer" className="text-violet-purple hover:text-indigo-700 transition duration-300">
                            <FaGithub className="text-xl transform hover:scale-110" />
                        </a>
                        <a href="https://www.linkedin.com/in/badamvenkatesh" target="_blank" rel="noopener noreferrer" className="text-violet-purple hover:text-indigo-700 transition duration-300">
                            <FaLinkedin className="text-xl transform hover:scale-110" />
                        </a>
                        <a href="mailto:badamvenkatesh2007@gmail.com" className="text-violet-purple hover:text-indigo-700 transition duration-300">
                            <FaEnvelope className="text-xl transform hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
