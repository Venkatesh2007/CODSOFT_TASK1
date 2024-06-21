import React from 'react';
import AboutDevImage from '../assets/images/AboutDev.png'; // Adjust the path as per your file structure
import { SiReact, SiFlutter, SiPython, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiC, SiCplusplus } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <SiHtml5 className="text-red-500" />, level: 'Advanced' },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-400" />, level: 'Advanced' },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, level: 'Advanced' },
  { name: 'React', icon: <SiReact className="text-blue-500" />, level: 'Advanced' },
  { name: 'Flutter', icon: <SiFlutter className="text-blue-700" />, level: 'Intermediate' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, level: 'Intermediate' },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-700" />, level: 'Intermediate' },
  { name: 'Python', icon: <SiPython className="text-yellow-400" />, level: 'Beginner' },
  { name: 'C', icon: <SiC className="text-blue-500" />, level: 'Intermediate' },
  { name: 'C++', icon: <SiCplusplus className="text-blue-600" />, level: 'Intermediate' },
];


const hobbies = ['Competitive Programming'];

const qualifications = ['Pre University Course(PUC) --- RGUKT Basar'];

const About = () => (
  <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white min-h-screen overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-800 via-purple-600 to-purple-700 opacity-40"></div>
      <div className="floating-blob w-72 h-72 bg-pink-400 opacity-70 rounded-full filter blur-3xl"></div>
      <div className="floating-blob w-96 h-96 bg-yellow-300 opacity-70 rounded-full filter blur-3xl"></div>
      <div className="floating-blob w-80 h-80 bg-blue-400 opacity-70 rounded-full filter blur-3xl"></div>
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bubble"></div>
      ))}
    </div>
    <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 name">About Me</h1>
      <div className="lg:flex lg:flex-row flex-col justify-between items-center mb-4">
        <img src={AboutDevImage} alt="About Dev" className="md:max-w-[500px] max-w-[300px] rounded-full shadow-lg" />
        <div className="lg:w-3/5 lg:ml-8 mt-2">
          <p className="text-lg mb-4 description">
            Hello, I'm Badam Venkatesh, a passionate web developer with a strong drive for innovation and a love for creating impactful solutions. My journey in the world of technology has been shaped by a blend of skills, experiences, and a relentless quest for excellence.
          </p>

          <p className='text-2xl mb-4 font-bold title'>Vision</p>
          <p className="text-lg mb-4 description">I envision a world where technology seamlessly integrates with everyday life, making processes more efficient and experiences more enriching. My goal is to contribute meaningfully to this vision through innovative solutions and impactful projects.</p>

          <p className='text-2xl mb-4 font-bold title'>Join Me</p>
          <p className="text-lg mb-4 description">Join me on this exciting journey as we explore the endless possibilities of technology and create solutions that make a difference in the digital landscape.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-2 title">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="animated-card p-4 bg-white bg-opacity-10 border border-white border-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg burst-animation">
            <div className="flex items-center justify-center mb-2 text-5xl">
              {skill.icon}
            </div>
            <p className="text-sm text-center title">{skill.name}</p>
            <p className="text-sm text-center text-gray-300 description">Level: {skill.level}</p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <div className="flex justify-around items-start mt-10">
          <div>
            <h2 className="text-3xl font-bold mb-2 title">Hobbies</h2>
            <ul className="list-disc ml-6 handwritten text-2xl">
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2 title">Qualifications</h2>
            <ul className="list-disc ml-6 handwritten text-2xl">
              {qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
