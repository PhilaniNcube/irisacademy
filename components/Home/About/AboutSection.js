import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-lightBrown" id="about">
      <section className="grid grid-cols-1 md:grid-cols-2 py-6 max-w-7xl mx-auto  text-navy">
        <div className="w-full px-4 md:border-r-2 border-brown">
          <h2 className="font-extrabold  text-2xl">ABOUT US</h2>
          <p className="leading-6 mt-4 text-xl font-medium">
            Bathulile Mdabula aged 33 years of age is the Director of IRIS
            ACADEMY. She founded the business in 2016 where she began tutoring
            to her siblings and neighbours kids, that when the passion grew. She
            obtained a BCOM Degree in Taxation at the University of South
            Africa. She has an undying passion for tutoring Mathematics and
            Accounting. She believes in tailor made programmes as per individual
            and group sessions paring with suitable profile tutor that is
            passionate and dedicated and can go the extra mile to reach leaners
            academic goals.
          </p>
        </div>
        <div className="w-full px-4 mt-4 md:mt-0">
          <h2 className="font-extrabold  text-2xl">OUR VALUES</h2>
          <div className="flex items-center mt-2 p-3 bg-white rounded justify-start space-x-4 hover:bg-navy hover:text-brown">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="h-8 w-8 fill-current"
            >
              <defs></defs>
              <path
                className="cls-1"
                d="M47.18,35.06a8.29,8.29,0,0,0-8.27,8.25,8.06,8.06,0,0,0,7.83,8.21,8.28,8.28,0,0,0,8.56-8,8.48,8.48,0,0,0-8.12-8.49m.1-5.45c1.62-3.54,3-6.46,7.44-3.95C57.09,27,58.78,27.94,57.36,31c-.8,1.71-.34,3.08,1.85,2.09,4.22-1.89,4.74,1.31,6,3.91,1.59,3.25-.56,4.19-2.81,5.24A9.51,9.51,0,0,0,61,43.29a12,12,0,0,0,1.26,1.06c3.66,2.21,4.12,6.2,1.1,9.1-1.34,1.29-2.78.67-4,.17-2.21-.87-2.87-.06-2,1.85,1.41,3.17,0,4.44-2.78,5.58s-5,1.45-6.23-2c-.45-1.28-1.6-2.15-2.36-.2-1.35,3.49-3.43,3.49-6.54,2.24s-3.76-2.82-2.61-5.75c.82-2.08-.37-2.31-2-1.65-3.43,1.41-4.57-.61-5.73-3.35s-.86-4.46,2-5.58c2-.77,2.23-1.87,0-2.72C28,40.76,28,38.84,29.24,36.06c1.16-2.57,2.14-4.54,5.47-3,1,.46,3.25,1.06,2.16-1.34-1.93-4.25.67-5.14,3.69-6.5,3.53-1.6,4.37.79,5.54,3a12.57,12.57,0,0,0,1.18,1.39"
              />
              <path
                className="cls-1"
                d="M83.36,56.25c-2.85-3.36-5.43-6.34-7.94-9.37-1.29-1.55-2.61-3.35-1.78-5.37,1.69-4.11-.11-7.48-1.93-10.79-5.39-9.8-13.87-14.38-25-14.31-1.05,0-2.11.06-3.16.15-1.74.14-3.38-.16-3.39-2.25,0-1.75,1.44-2.2,3-2.41a32.4,32.4,0,0,1,35.26,23c.32,1.13,1,2.57.58,3.44-2.15,4.55,1,7,3.47,9.84,1.46,1.69,3,3.3,4.36,5.1,2.21,3,1.8,5.36-1.43,7.18-1.4.79-1.24,1.39-1.34,2.84-.25,3.61,1.73,7.94-2.64,10.65-1.24.78-.28,2.17-.06,3.28.75,3.88-.78,7.26-4.61,7.92-10,1.72-19.4.25-27.32-6.66a13.74,13.74,0,0,1-3.93-7.19c-.36-1.39-.14-2.71,1.46-3.19A2.21,2.21,0,0,1,50,70c1.58,6.24,6.32,8.71,12,10,3.84.91,7.73,1.76,11.71,1.26,2.31-.29,4.14-1.14,3-4.14-.94-2.41-.17-4.33,1.22-6.57a10.59,10.59,0,0,0,1-6.93c-.94-4.15.78-5.89,4.47-7.37"
              />
              <path
                className="cls-1"
                d="M24.1,23.14a6.08,6.08,0,0,0,6.15-5.85,6.16,6.16,0,1,0-12.31,0,6.14,6.14,0,0,0,6.16,5.84m6.81-12.66c2.9-1.42,4.55-1,5.61,1.73,1,2.54-.08,3.68-2.57,4.7,2.31,1.48,3.85,2.78,2.34,5.69-1.29,2.49-2.86,2.15-5.24,1.25.63,2.6,1.09,4.52-1.9,5.65-2.74,1-3.78-.31-5-2.59-1.31,2.21-2.33,3.74-5.08,2.57s-2.6-2.82-2.08-5.32c-2.48.7-4.16.59-5.23-2s.18-3.9,2.68-4.94c-2.72-1.39-3.79-2.76-2.5-5.54,1.17-2.52,2.74-2.34,5.2-1.24-1-3.07-.49-4.75,2.4-5.88s3.22,1.32,4.75,2.61c1.07-1.89,1.9-3.61,4.75-2.49s2.83,2.89,1.89,5.82"
              />
              <path
                className="cls-1"
                d="M24.8,93.52c.17-1.17.54-3.12.75-5.07A43.27,43.27,0,0,0,22,65.74c-3.7-8.22-6.42-16.69-5.84-25.88a48.21,48.21,0,0,1,.68-5.07,2.18,2.18,0,0,1,2.41-2.09,2.24,2.24,0,0,1,2.07,2.82c-2.07,10.63,1.27,20.26,5.44,29.74s4.39,19.1,2.61,29c-.27,1.49-.82,3-2.65,2.86-1.58-.1-2.16-1.3-1.91-3.61"
              />
            </svg>
            <p className="font-semibold text-lg">Self-Discipline</p>
          </div>
          <div className="flex items-center mt-2 p-3 bg-white rounded justify-start space-x-4 hover:bg-navy hover:text-brown">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="h-8 w-8 fill-current"
            >
              <defs></defs>
              <path
                className="cls-1"
                d="M80.77,41.12h0c0-1.07,0-2.15,0-3.22.07-1.63-.29-3.15-2.16-3.23s-2.23,1.53-2.23,3.11c0,2.41,0,4.82,0,7.23,0,1.37.57,2.4,2.09,2.41a2.05,2.05,0,0,0,2.22-2.28c0-1.34,0-2.68,0-4m0,17.65V56.36c0-1.53-.55-2.71-2.26-2.68S76.42,55,76.41,56.5c0,.8-.08,1.6-.1,2.4-.15,5.76-2.39,10.25-7.39,13.44-5.87,3.74-11.6,7.7-17.28,11.73-1.86,1.32-3.19,1.24-5-.07-3.13-2.3-6.44-4.34-9.66-6.52-1.38-.93-2.89-2-4.18-.18s.23,2.91,1.61,3.84c4.12,2.75,8.29,5.43,12.34,8.28,1.86,1.3,3.3,1,5.07-.18,6.72-4.65,13.5-9.2,20.3-13.73,6-4,8.49-9.74,8.62-16.74m-31,2.17a5.39,5.39,0,0,0,4.31-2.2q7.79-9.21,15.58-18.4c1.22-1.43,2.15-3,.53-4.58s-3.13-1-4.62.27c-3.26,2.78-6.55,5.53-9.81,8.31-5.67,4.82-5.66,4.82-11.84,1a23,23,0,0,0-2.81-1.51,2.86,2.86,0,0,0-3.3.79c-.89.89-1.63,2.13-.84,3.25,3.3,4.69,6.88,9.18,11.47,12.72a3.41,3.41,0,0,0,1.33.36m-.4,6.48a16.63,16.63,0,1,1,.2-33.25,16.28,16.28,0,0,1,8,2.2c1.38.81,2.9,1.27,3.78-.51S61,33.15,59.57,32.4c-.59-.32-1.17-.66-1.78-.93a21.16,21.16,0,1,0-3,39.7C63.89,68.6,70.42,60.09,70.29,51c0-1.71.26-3.84-2.32-3.83-2.27,0-2.2,1.87-2.19,3.53a15,15,0,0,1-.13,2A16.5,16.5,0,0,1,49.34,67.42m-31.71-23h.13c0,5.49-.17,11,0,16.48a17.45,17.45,0,0,0,6,12.74c1.2,1.07,2.52,1.69,3.81.13s.28-2.44-.78-3.4a14.39,14.39,0,0,1-4.73-10.75c-.16-9.25,0-18.5-.11-27.75,0-1.84.56-2.62,2.39-2.87,8.23-1.09,15.18-5.11,21.68-9.94,2.24-1.66,3.7-2.09,6.11-.14A51.13,51.13,0,0,0,68,27.6a26.73,26.73,0,0,0,10.24,1.73c1.46-.09,2.67-.83,2.52-2.52-.13-1.42-1.21-2-2.57-2-10-.05-17.86-5.18-25.29-11-2.69-2.11-4.39-2.32-7.21-.08-7.39,5.87-15.25,11-25.25,11.07-2.42,0-2.77,1.59-2.76,3.53,0,5.36,0,10.72,0,16.09m69.29-2.3c-.31,6.06.55,13.45-.44,20.79A23.84,23.84,0,0,1,76,80.23c-8,5.42-16,10.72-24,16.21-2.11,1.47-3.64,1.33-5.7-.1C38.58,91,30.78,85.77,23,80.58S11.72,68.15,11.6,59.16c-.18-12.33,0-24.67-.08-37,0-2.24.12-4.26,3.12-3.77C27.64,20.52,37,13.71,45.71,5.6c2.89-2.7,4.51-2.52,7.09.18A52.38,52.38,0,0,0,68.61,16.66,23.81,23.81,0,0,0,82.75,18.4c3.14-.49,4.33.69,4.23,3.93-.2,6.16-.06,12.33-.06,19.8"
              />
            </svg>
            <p className="font-semibold text-lg">Responsibilty</p>
          </div>
          <div className="flex items-center mt-2 p-3 bg-white rounded justify-start space-x-4 hover:bg-navy hover:text-brown">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="h-8 w-8 fill-current"
            >
              <defs></defs>
              <path
                className="cls-1"
                d="M64.09,36.63c-1.47.07-2.84.58-3.1,2.37a2.47,2.47,0,0,0,2.44,3,8.36,8.36,0,0,1,6.88,4.27,2.55,2.55,0,0,0,3.8,1c1.66-1.07,1.66-2.58.67-4.21a13.23,13.23,0,0,0-10.69-6.53m-2.3,55.61a8.73,8.73,0,0,0,1.91-.18c3-.76,5.25-2.54,5.82-5.53.39-2.09,2.13-5.13-2.1-5.91-.76-.14-.47-1.42-.43-2.2.38-6.74,1-13.43,3.27-19.85.44-1.27,1.14-2.57,0-3.77s-2.46-.39-3.7.12a12.64,12.64,0,0,1-10.19.14c-1.2-.51-2.42-1.56-3.72-.46s-.62,2.7-.17,4.1a65.21,65.21,0,0,1,3,19.45c0,1.25.54,2.87-1.71,2.83-1.58,0-1.48,1.16-1.55,2.27-.33,5.34,3.37,9,9.51,9M83.84,55.38c-.07,3.84-2.79,9.69-8.22,14.08a5.6,5.6,0,0,0-2.37,5.09c.15,3.36.13,6.74,0,10.11-.24,6.65-5,10.91-12,11-7.19,0-12-4.28-12.35-11a32,32,0,0,1,0-4c.44-5.34-.45-9.6-4.82-13.83-7.41-7.16-7.66-18.66-2-27.19A22.7,22.7,0,0,1,68,30.25c9.59,3,16,11.83,15.89,25.13"
              />
              <path
                className="cls-1"
                d="M12.42,48.48c-.16.3-.54.7-.45.89,3.56,7.7,13.54,13.19,22.23,12.2,1.46-.17,2.8-.17,3.26,1.48.55,2-.93,2.71-2.41,3a19.12,19.12,0,0,1-13.34-1.74C13.07,59.87,7.56,52.52,3.4,44c-.78-1.6-.64-3.28,1.19-3.53,8.25-1.11,16-5,24.61-4.06a23.1,23.1,0,0,1,6.62,1.68c1.33.56,2.44,1.46,1.86,3.08-.65,1.81-2,1.77-3.62,1.13-8.17-3.24-15.89-.18-23.69,1.8-.64.16-1.53.55-1,1.3.83,1.21.79,3.42,3.13,3.15Z"
              />
              <path
                className="cls-1"
                d="M35.15,16.92c-3,4-2.77,8.69-2.17,13.31.21,1.67.89,3.42-1.27,4-2.38.6-2.81-1.32-3.17-3.13C26.73,22.14,30,14.42,34.41,7c.74-1.25,2.24-2,3.38-.67,4.27,5,10,8.66,13.33,14.52a7.18,7.18,0,0,1,.72,1.44c.63,1.92,2.57,4.36-.34,5.56s-2.79-2-3.76-3.58c-2-3.28-3.75-6.85-7.8-8.19l.07.08c.48-1.05,0-1.19-.87-.88l.06.06c.06-1.68-1.49-2.92-2.36-2.55A3.52,3.52,0,0,0,35.11,17Z"
              />
              <path
                className="cls-1"
                d="M12.48,48.54c.28-4.24,1.18-4.8,4.77-2.81a50,50,0,0,0,16.55,6c1.6.25,3.1.78,2.84,2.65-.29,2.09-1.94,2.13-3.72,1.86-7.4-1.11-14-4.4-20.5-7.75l.06.06"
              />
              <path
                className="cls-1"
                d="M39.94,16.11a64.16,64.16,0,0,0,3.52,15.72c.56,1.52,1,3-.87,3.77-2.07.84-2.79-.7-3.45-2.33-2.11-5.26-2.7-10.89-4-16.35l0,.07c1.33-.63,2.4-1.91,4.09-1.62l-.06-.06c-.1.69.32.85.87.88Z"
              />
              <path
                className="cls-1"
                d="M93.78,55.25c-2-.06-4.39.18-4.44-2.74s2.2-2.91,4.3-2.95,4.39.1,4.47,2.81-2.23,2.88-4.33,2.88"
              />
              <path
                className="cls-1"
                d="M58.32,19.94c0-2.31.2-4.41,2.68-4.43,3,0,3,2.44,3,4.66,0,2-.18,4-2.73,4.1-3.21.06-2.86-2.52-3-4.33"
              />
              <path
                className="cls-1"
                d="M42.16,74.55c-1.08,2.19-2.46,4.38-5.25,4.75a2.26,2.26,0,0,1-2.64-2.76,6.09,6.09,0,0,1,5.08-5c1.63-.26,2.58,1.14,2.81,3"
              />
              <path
                className="cls-1"
                d="M88.22,76.34c-.41,2.12-1.41,3.41-3.1,3-2.55-.7-4.58-2.4-4.83-5.23a2.34,2.34,0,0,1,2.91-2.55,7.75,7.75,0,0,1,5,4.83"
              />
              <path
                className="cls-1"
                d="M88.15,28.4a7,7,0,0,1-5,4.87,2.23,2.23,0,0,1-2.86-2.49,6,6,0,0,1,4.81-5.21c1.6-.42,2.72.78,3,2.83"
              />
              <path
                className="cls-1"
                d="M62.24,60.5c2.33-.84,2.91-.14,2.23,2.65a68.73,68.73,0,0,0-1.86,15.54c0,1,.19,2.35-1.5,2.18-1.44-.14-.92-1.39-1-2.22-.53-4.65-.91-9.33-1.56-14-.56-4-.7-4,3.7-4.18"
              />
              <path
                className="cls-1"
                d="M60.59,88.13c-1.74-.58-5.46,1.42-5.43-2.3s3.68-2,5.82-2.29a17.53,17.53,0,0,1,3.62,0c1.49.08,2.75.72,2.71,2.35s-1.24,2.24-2.78,2.23H60.59"
              />
            </svg>
            <p className="font-semibold text-lg">Creativity</p>
          </div>
          <div className="flex items-center mt-2 p-3 bg-white rounded justify-start space-x-4 hover:bg-navy hover:text-brown">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="h-8 w-8 fill-current"
            >
              <defs></defs>
              <path
                className="cls-1"
                d="M23.21,63l.4,0a1,1,0,0,1-.32.09,1.75,1.75,0,0,1-.38-.09l.3,0m2,1.46c1.13,3.09,2.24,5.94,6.22,5.52.46,0,1.2.67,1.49,1.21,1.74,3.28,5.9,2.61,8.18,5A1.24,1.24,0,0,0,42.91,76c.34-.6,0-1.66-.52-1.71-3.66-.33-5.1-2.75-6.06-5.86-.24-.78-1.3-.77-2.12-.76s-2.18.06-2.55-.82c-1.32-3.19-4-2.35-6.42-2.35m4.65-29.41c3.33,2,6.18.22,9-1.08,8.74-4,16.85-2.94,24.44,2.83,5.37,4.09,9.57,9.28,13.83,14.43,1,1.15,1.51,2.82,3.7,3.24-1.76-6.66-3.45-13.08-5.15-19.5-.17-.64-.41-1.27-.53-1.93-.26-1.32-1.28-1.47-2.35-1.78C67.2,29.68,61.58,28,56,26.34c-9.17-2.69-19.82.83-26.06,8.73M24.6,32.31c-1.75,6.51-3.36,13.06-5.32,19.51-1,3.37.28,4.45,3.3,5.27C26.08,58,29.84,59,32.7,61,36,63.36,41,63.78,42,68.89c.06.26.95.35,1.45.54a6.45,6.45,0,0,1,3.8,3.8,5,5,0,0,0,7.67,1.93,26.35,26.35,0,0,1,3.36-2c3.54-2.11,5.66-6.27,10.16-7.08.25,0,.54-.65.56-1,.18-2.53,1.83-3,4-3.54,3-.72,3.79-3.14,2-5.45C70.67,50.5,66.24,45,60.59,40.58c-6.15-4.77-12.72-5.82-19.85-2.29a18.07,18.07,0,0,1-7.24,2.16c-6.17.28-8.48-1.88-8.9-8.14M16.5,59.7c-4.17,1.24-7.8-.78-11.49-2-2.11-.72-2.91-2.78-2.34-5q3.66-14,7.48-27.89c.72-2.58,2.78-3.86,5.27-3.07,3.55,1.12,7.61,1,10.18,4.84,1.08,1.63,3.88,2.13,6.14.74,1.48-.91,3-1.77,4.43-2.76A22.17,22.17,0,0,1,56.8,21.69c4.82,1.6,9.74,2.91,14.59,4.44a3.25,3.25,0,0,0,3.77-.95c2.83-2.61,6.67-3.27,10.4-3.51,2.32-.15,3.49,1.68,4.06,3.78C92,34.22,94.4,43,96.73,51.78c.86,3.22-.15,5.68-3.58,6.42s-6.57,3.39-10.33.92c-1-.68-2,.24-2.49,1.34-2.09,4.89-6.88,7.35-10.66,10.21S62.64,77.5,57.8,79c-.36.11-.62.63-1,.68-6.59,1-13.15,2.49-19.78-.09-3.81-1.48-6.72-4.45-10.66-5.73C22.28,72.47,16.56,64,16.5,59.7"
              />
            </svg>
            <p className="font-semibold text-lg">
              Close tutor/leaner relationship
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
