import { useState, useEffect } from 'react';

import HeroImage from './../../assets/images/png/home-hero.png';
import PrimaryButton from '../button/Primary-button';
import classes from './Hero.module.css';

const Hero = () => {
    const [loadedHeroBg, setLoadedHeroBg] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.src = HeroImage;
        img.onload = () => setLoadedHeroBg(HeroImage);
    }, []);

    return (
        <section className={classes.hero} style={{ backgroundImage: `url(${loadedHeroBg})` }}>
            <div className='container'>
                <div className={classes['hero__content']}>
                    <h1>
                        Your <span className='text-blue'>personal</span> math tutor
                    </h1>
                    <p>Guaranteed improvement in math grades</p>
                    <PrimaryButton text='Try for free' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
