import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 gap-8 mb-60">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl text-zinc-700 font-bold">I am</h1>
        <h1 className="text-4xl md:text-6xl mb-5 text-orange-400 font-bold">Nourhan Hosny</h1>
        <h2 className="text-md md:text-lg text-zinc-700 font-semibold">
          Computer science student | Full stack enthusiast | React.js | Tailwind CSS
        </h2>
      </div>

      <div>
        <img
          src="/3466201323164247979.jpg"
          alt="Nourhan Hosny"
          className="rounded-full w-48 sm:w-64 md:w-80 lg:w-96 drop-shadow-2xl drop-shadow-orange-300"
        />
      </div>
    </div>
  );
};

export default Hero;
