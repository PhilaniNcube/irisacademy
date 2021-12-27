import React from 'react';

const Contact = () => {
  return (
    <section className="text-white body-font relative bg-navy" id="contact">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="lg:w-2/4 md:w-1/2 px-6 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white text-xl mb-1 font-extrabold title-font">
            Contact Us
          </h2>

          <input
            type="hidden"
            name="apikey"
            value="5e3b5053-c877-4c45-89df-f779cd03be4c"
          />

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-navy border-b border-t-0 border-l-0 border-r-0 border-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-navy border-b border-t-0 border-l-0 border-r-0 border-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-navy border rounded border-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>

          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          ></input>
          <button
            type="submit"
            className="text-navy bg-brown border-brown font-semibold border-0 py-2 px-6 focus:outline-none hover:bg-lightBrown hover:border-white rounded text-lg"
          >
            Submit
          </button>
        </form>
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4418578440464!2d25.578775717443854!3d-33.8782724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad58763dd35df%3A0x3e72785df90478ae!2sBathulile%20LPPG%20Consulting!5e0!3m2!1sen!2sza!4v1640589365031!5m2!1sen!2sza"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          ></iframe>
          <div className=" relative flex flex-wrap py-6 w-full rounded shadow-md bg-navy">
            <div className="lg:w-2/4 px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 font-light">
                {' '}
                2836 Merele Street, Kwazakhele, Port Elizabeth
              </p>
            </div>
            <div className="lg:w-2/4 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-bold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-white font-light leading-relaxed">
                info@leonorahirisacademy.co.za
              </a>
              <h2 className="title-font font-bold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed font-light">081 540 7709</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
