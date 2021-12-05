import React from 'react';

const Hero = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: 'url(/images/school.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        height: '63vh',
        maxWidth: '100vw',
        width: '100vw',
      }}
    >
      <div className="max-w-7xl h-full flex items-center justify-end px-8 md:px-0">
        <h1 className="font-extrabold text-2xl md:text-5xl text-white leading-5">
          A progressive approach <br></br>
          <span className="font-normal text-3xl md:text-6xl">to tutoring</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
