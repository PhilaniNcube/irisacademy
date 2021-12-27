import Head from 'next/head';
import { Fragment } from 'react';
import AboutSection from '../components/Home/About/AboutSection';
import NewAbout from '../components/Home/About/NewAbout';
import Contact from '../components/Home/Contact/Contact';
import Hero from '../components/Home/Hero';
import ContactUs from '../components/Home/Packages/ContactUs';
import Packages from '../components/Home/Packages/Packages';
import Services from '../components/Home/Services/Services';
import Why from '../components/Home/Why/Why';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Leonorah Iris Academy</title>
        <meta
          name="description"
          content="Leonorah Iris Academy for your tutoring of Mathematics and
            Accounting"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Mathematics tutoring, tutoring, accounting, accounts, tutor, accounting tutor, maths tutor"
        />
        <meta property="og:locale" content="en_ZA" />
        <meta property="og:site_name" content="Leonorah Iris Academy" />
        <meta
          property="og:image"
          content="https://www.leonorahirisacademy.co.za/images/logo.png"
        />
      </Head>
      <Hero />
      <NewAbout />
      <Why />
      <Services />
      <ContactUs />
      <Contact />
    </Fragment>
  );
}
