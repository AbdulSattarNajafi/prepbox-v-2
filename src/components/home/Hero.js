import { LazyLoadImage } from 'react-lazy-load-image-component';
import HeroImage from './../../assets/images/png/home-hero.png';

import PrimaryButton from '../button/Primary-button';
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className='container'>
                <div className={classes['hero__content']}>
                    <h1>
                        Your <span className='text-blue'>personal</span> math tutor
                    </h1>
                    <p>Guaranteed improvement in math grades</p>
                    <PrimaryButton text='Try for free' />
                </div>
            </div>

            <div className={classes['hero__image']}>
                <LazyLoadImage src={HeroImage} width='1400' height='800' alt='Banner' />
            </div>
        </section>
    );
};

export default Hero;
