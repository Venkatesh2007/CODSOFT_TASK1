import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaPython, FaReact, FaJs } from 'react-icons/fa';

const projects = [
  {
    title: 'Hostel Mess Attendance System',
    description: 'A Python-based project involving QR code generation and scanning, attendance tracking, SMS notifications, and database integration.',
    link: 'https://github.com/Venkatesh2007/MEAL-MATE.git',
    icon: <FaPython color="#D1C4E9" />
  },
  {
    title: 'PUC Resources Website',
    description: 'Developed a website to provide resources for PUC (Pre-University Course) students. The website includes subject-specific materials and chapters to enhance the learning experience.',
    link: 'https://rguktpdfshub.netlify.app',
    icon: <FaReact color="#C5CAE9" />
  },
  {
    title: 'RGUKT STD HUB',
    description: 'The RGUKT Student Hub Clone is a web-based platform designed to facilitate academic resource sharing among students at RGUKT.',
    icon: <FaReact color="#C5CAE9" />
  },
  {
    title: 'TIC TAC TOE Game',
    description: 'The Tic Tac Toe game developed using JavaScript offers a classic, turn-based gameplay experience within a sleek and interactive user interface.',
    link: 'https://github.com/Venkatesh2007/TIC_TAC_TOE.git',
    icon: <FaJs color="#BBDEFB" />
  },
  {
    title: 'Rock Paper Scissors Game',
    description: 'The Rock Paper Scissors game, developed using JavaScript, creates an interactive duel between the user and the computer.',
    link: 'https://github.com/Venkatesh2007/Rock-paper-Scissors-game.git',
    icon: <FaJs color="#BBDEFB" />
  },
];

const Projects = () => (
  <div className="bg-gradient-to-br from-purple-700 via-violet-700 to-pink-700 min-h-screen flex items-center justify-center p-4">
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-white text-center handwritten">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-4 rounded-lg shadow-xl bg-white bg-opacity-10 border border-white border-opacity-30 hover:transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-white title" style={{ color: '#D1C4E9' }}>{project.title}</h2>
              {project.icon}
            </div>
            <p className="text-white mb-4 description">{project.description}</p>
            <a href={project.link} className="flex items-center text-blue-200 hover:text-blue-400 transition duration-300 ease-in-out">
              View Project <AiOutlineArrowRight className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
