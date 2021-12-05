import React from 'react';

const Services = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 bg-navy text-white h-90 md:h-56"
      id="services"
    >
      <div className="w-full flex flex-col items-center py-6 h-full bg-navy">
        <h2 className="font-extrabold  text-2xl text-center">Our Services</h2>
        <ul className="list-disc">
          <li className="text-lg font-semibold">Online Tutoring</li>
          <li className="text-lg font-semibold">One on One tutoring</li>
          <li className="text-lg font-semibold">After school tutoring</li>
          <li className="text-lg font-semibold">Home shooling tutoring</li>
          <li className="text-lg font-semibold">Exam Preparation Program</li>
        </ul>
      </div>
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-full hidden md:block"
        style={{ backgroundImage: 'url(/images/classroom.jpg)' }}
      ></div>
    </section>
  );
};

export default Services;
