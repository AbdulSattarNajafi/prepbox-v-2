// import { LazyLoadImage } from 'react-lazy-load-image-component';

import HeroImage from './../../assets/images/png/home-hero.png';
import HeroImageWebp from './../../assets/images/webp/home-hero.webp';

import HeroImageMd from './../../assets/images/png/home-hero-md.png';
import HeroImageMdWebp from './../../assets/images/webp/home-hero-md.webp';

import HeroImageSm from './../../assets/images/png/home-hero-sm.png';
import HeroImageSmWebp from './../../assets/images/webp/home-hero-sm.webp';

import HeroImageXs from './../../assets/images/png/home-hero-xs.png';
import HeroImageXsWebp from './../../assets/images/webp/home-hero-xs.webp';

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
                <picture className={classes['hero__image-lg']}>
                    <source type='image/webp' srcSet={HeroImageWebp} />
                    <img src={HeroImage} width='1120' height='622' alt='Banner' />
                </picture>

                {/* <LazyLoadImage
                    className={classes['hero__image-lg']}
                    src={HeroImage}
                    width='1120'
                    height='622'
                    alt='Banner'
                /> */}

                <picture className={classes['hero__image-md']}>
                    <source type='image/webp' srcSet={HeroImageMdWebp} />
                    <img src={HeroImageMd} width='860' height='593' alt='Banner' />
                </picture>

                {/* <LazyLoadImage
                    className={classes['hero__image-md']}
                    src={HeroImageMd}
                    width='860'
                    height='593'
                    alt='Banner'
                /> */}

                <picture className={classes['hero__image-sm']}>
                    <source type='image/webp' srcSet={HeroImageSmWebp} />
                    <img src={HeroImageSm} width='440' height='550' alt='Banner' />
                </picture>

                {/* <LazyLoadImage
                    className={classes['hero__image-sm']}
                    src={HeroImageSm}
                    width='440'
                    height='550'
                    alt='Banner'
                /> */}

                <picture className={classes['hero__image-xs']}>
                    <source type='image/webp' srcSet={HeroImageXsWebp} />
                    <img src={HeroImageXs} width='320' height='582' alt='Banner' />
                </picture>

                {/* <LazyLoadImage
                    className={classes['hero__image-xs']}
                    src={HeroImageXs}
                    width='320'
                    height='582'
                    alt='Banner'
                /> */}
            </div>
        </section>
    );
};

export default Hero;
