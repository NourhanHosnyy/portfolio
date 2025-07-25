import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className="flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-16 py-16">
      <div className="text-center md:text-left">
        <h2 className="text-5xl md:text-6xl text-zinc-700 font-bold">Contact</h2>
        <h2 className="text-5xl md:text-6xl mb-5 text-orange-400 font-bold">Me</h2>
      </div>

      <div className="text-center md:text-left mt-4 md:mt-10">
        <p className="text-md text-zinc-700 hover:text-zinc-400 cursor-pointer font-bold">
          Phone: +201069025357
        </p>
        <p className="text-md text-zinc-700 hover:text-zinc-400 cursor-pointer font-bold">
          Email: nourhanhosny87@gmail.com
        </p>
        <p className="text-md text-zinc-700 hover:text-zinc-400 cursor-pointer font-bold">
          LinkedIn: <a href="https://www.linkedin.com/in/nourhan-hosny-48628929b" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">click</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
