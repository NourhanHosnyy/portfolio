import React from 'react';

const About = () => {
  return (
    <div id="About" className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 px-6 md:px-16 py-12 mb-40">
      <div className="w-full md:w-2/3">
        <p className="text-zinc-700 font-semibold leading-8 text-center md:text-left">
          Hi! I'm Nourhan El-Sayed Hosny, a passionate and dedicated front-end developer exploring full stack development with a strong foundation in HTML, CSS, JavaScript,
          Tailwind and the React ecosystem. I love bringing ideas to life through clean, responsive, and user-friendly web interfaces. 
          I'm constantly learning and pushing my skills forward to create modern and impactful digital experiences. 
          My journey in tech is fueled by creativity, curiosity, and the drive to solve real-world problems with code. 
          Outside of coding, I value focus, personal growth, and staying true to my principles.
          I'm excited to build, collaborate, and grow in the world of web development!
        </p>
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-5xl md:text-6xl text-zinc-700 font-bold">About</h2>
        <h2 className="text-5xl md:text-6xl mb-5 text-orange-400 font-bold">Me</h2>
      </div>
    </div>
  );
};

export default About;
