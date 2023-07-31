import React, { lazy } from 'react';
// import Hero from '../components/home/Hero';
import Admission from '../components/home/Admission';
import HowWork from '../components/home/HowWork';
import Support from '../components/home/Support';
import Plans from '../components/home/Plans';
import Session from '../components/home/Session';
const HeroComponent = lazy(() => import('../components/home/Hero'));

const Home = () => {
    return (
        <>
            <HeroComponent />
            <Admission />
            <HowWork />
            <Support />
            <Plans />
            <Session />
        </>
    );
};

export default Home;
