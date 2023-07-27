import { LazyLoadImage } from 'react-lazy-load-image-component';
import HeroImage from './../../assets/images/png/home-hero.png';
import HeroImageWebp from './../../assets/images/png/home-hero.webp';
// import HeroImageMd from './../../assets/images/png/home-hero-md.png';
// import HeroImageSm from './../../assets/images/png/home-hero-sm.png';
// import HeroImageXs from './../../assets/images/png/home-hero-xs.png';

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
                <picture>
                    <source type='image/webp' srcSet={HeroImageWebp} />
                    <img src={HeroImage} width='1120' height='622' alt='Banner' />
                </picture>
                {/* <LazyLoadImage
                    className={classes['hero__image-lg']}
                    src={HeroImage}
                    width='1120'
                    height='622'
                    alt='Banner'
                    effect='blur'
                />
                <LazyLoadImage
                    className={classes['hero__image-md']}
                    src={HeroImageMd}
                    width='860'
                    height='593'
                    alt='Banner'
                    effect='blur'
                />
                <LazyLoadImage
                    className={classes['hero__image-sm']}
                    src={HeroImageSm}
                    width='440'
                    height='550'
                    alt='Banner'
                    effect='blur'
                />
                <LazyLoadImage
                    className={classes['hero__image-xs']}
                    src={HeroImageXs}
                    width='320'
                    height='582'
                    alt='Banner'
                    effect='blur'
                /> */}
            </div>
        </section>
    );
};

export default Hero;
