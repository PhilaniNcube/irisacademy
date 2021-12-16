import React from 'react';

const NewAbout = () => {
  return (
    <section className="py-4 bg-lightBrown">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
        <div className="max-w-xs  flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
          <div>
            <h4 className="text-navy dark:text-gray-100 font-bold mb-3">
              Mission
            </h4>
            <p className="text-navy dark:text-gray-100 text-sm">
              IS TO EDUCATE AND EMPOWER EVERY LEARNER IN AN ATMOSPHERE WHERE
              THEY WILL BE AN INSPIRED TO BE CREATIVE AND HAVE FUN WHILE
              LEARNING
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-xs  flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
          <div>
            <h4 className="text-navy dark:text-gray-100 font-bold mb-3">
              Vision
            </h4>
            <p className="text-navy dark:text-gray-100 text-sm">
              IRIS ACADEMY BELIEVES THAT EVERY LEARNER CAN ACHIEVE THEIR FULL
              POTENTIAL THATS WHY IRIS ACADEMY CREATE A SAFE ENVIRONMENT THAT IS
              COMFORTABLE TO MAKE SURE EVERY LEARNER IS CREATIVE AND ENTHUSIASM
              TO LEARN
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-xs  flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
          <div>
            <h4 className="text-navy dark:text-gray-100 font-bold mb-3">
              Values
            </h4>
            <p className="text-navy dark:text-gray-100 text-sm">
              SELF DISCIPLINE, RESPONSIBILITY, CREATIVITY, CLOSE RELATIONSHIP
              BETWEEN A LEARNER AND TUTOR
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-navy pb-4">
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
          <div className="md:col-span-2">
            <p className="text-navy">
              Leonorah Iris Academy is Tutoring Center that is dedicated to
              bridging the gap between the school system and a leaner. We strive
              to focus on each learner and create an environment where the
              leaner is creative and studies at their own pace and according to
              their own learning style. We promote, visualization and practical
              learning styles.
            </p>
          </div>
          <div className="md:col-span-4 bg-white rounded-lg shadow py-2 px-3">
            <h3 className="text-navy font-medium">
              WE DEVIATE FROM THE NORM OF THE SCHOOL SCHOOL SYSTEM BY THE
              FOLLOWING WAY:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded bg-navy text-lightBrown p-2 flex items-center">
                <p className="text-xs">WE HAVE ONE ON ONE TUTORING</p>
              </div>
              <div className="rounded bg-navy text-lightBrown p-2 flex items-center">
                <p className="text-xs">WE HAVE ONLINE TUTORING SYSTEM</p>
              </div>
              <div className="rounded bg-navy text-lightBrown p-2 flex items-center">
                <p className="text-xs">
                  WE LIMIT THE NUMBER OF STUDENTS TO 4 LEARNERS FOR OUR GROUP
                  TUTORING SESSIONS
                </p>
              </div>
              <div className="rounded bg-navy text-lightBrown p-2 flex items-center">
                <p className="text-xs">
                  WE HAVE HOME BASED TUTORING WHERE A LEARNER CAN BE TUTORED IN
                  THE COMFORT OF THEIR OWN HOME
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-6 mt-16 p-6">
          <div className="col-span-8 md:col-span-3 text-navy flex justify-center flex-col">
            <p className="text-base">
              Our tutors are experienced, professional and dedicated to make
              sure every learner has 100% pass rate
            </p>
            <p className="text-base">
              We provide a caring and passionate environment for our learners
              that makes a learner feel like they are being tutored by their
              family member
            </p>
          </div>
          <div className="col-span-8 md:col-span-5 text-navy">
            <h2 className="font-extrabold  text-2xl">Meet Our Director</h2>
            <p className="text-base">
              BATHULILE MDABULA IS OUR DIRECTOR, SHE STARTED THE TUTORING CENTER
              IN 2016, SHE STARTED TUTORING HER SIBLINGS AND HER NEIGHBORS
              CHILDREN, THATS WHERE THE PASSION OF TUTORING STARTED. SHE STUDIED
              AT UNIVERSITY OF SOUTH AFRICA BCOM IN TAXATION SHE HAS A PASSION
              FOR NUMBERS AND SPECIALISES IN TUTORING MATHS AND ACCOUNTING. SHE
              BELIEVES THAT WITH A RIGHT TUTOR THAT IS PASSIONATE DEDICATED ANY
              LEARNER CAN REACH THEIR ACADEMIC GOAL."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAbout;
