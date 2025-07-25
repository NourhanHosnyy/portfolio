import React from 'react';

const projects = [
  {
    image: "/6035054067862062675.jpg",
    title: "Weather App",
    link: "https://weather-app-nourhan.netlify.app",
  },
  {
    image: "/6041620398547782424.jpg",
    title: "To-Do List",
    link: "https://todo-nourhan.netlify.app",
  },
  {
    image: "/6043872198361466404.jpg",
    title: "Calculator",
    link: "https://calc-nourhan.netlify.app",
  },
  {
    image: "/6037619477597767336.jpg",
    title: "Tasbih Counter",
    link: "https://tasbih-nourhan.netlify.app",
  },
  {
    image: "/6026045000296548535.jpg",
    title: "Discover Egypt",
    link: "https://discover-egypt-nourhan.netlify.app",
  },
  {
    image: "/6026045000296548584.jpg",
    title: "Calma",
    link: "https://calma-nourhan.netlify.app",
  },
  {
    image: "/6032802268048378570.jpg",
    title: "Countdown",
    link: "https://countdown-nourhan.netlify.app",
  },
  {
    image: "/5769507789117442631.jpg",
    title: "Password Generator",
    link: "https://password-generator-nourhan.netlify.app",
  },
];

const Projects = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-zinc-700 mb-25">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <a href={project.link} target="_blank"rel="noopener noreferrer"className="bg-orange-500 hover:bg-orange-300 text-white px-4 py-2 rounded-full transition duration-300">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
