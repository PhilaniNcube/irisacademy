import Head from 'next/head';
import { Fragment } from 'react';
import AboutSection from '../components/Home/About/AboutSection';
import NewAbout from '../components/Home/About/NewAbout';
import Contact from '../components/Home/Contact/Contact';
import Hero from '../components/Home/Hero';
import Packages from '../components/Home/Packages/Packages';
import Services from '../components/Home/Services/Services';
import Why from '../components/Home/Why/Why';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Leonorah Iris Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <NewAbout />
      <Why />
      <Services />
      <Packages />
      <Contact />
    </Fragment>
  );
}
