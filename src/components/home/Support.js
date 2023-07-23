import PrimaryButton from '../button/Primary-button';

import Lgcse from './../../assets/images/png/lgcse.png';
import LgcseWebp from './../../assets/images/webp/lgcse.webp';
import IBLogo from './../../assets/images/png/ib.png';
import IBLogoWebp from './../../assets/images/webp/ib.webp';
import APLogo from './../../assets/images/png/ap.png';
import APLogoWebp from './../../assets/images/webp/ap.webp';

import classes from './Support.module.css';

const Support = () => {
    return (
        <section className={classes.support}>
            <div className='container'>
                <div className={classes['support-content']}>
                    <h2>Syllabuses We Support</h2>
                    <div className={classes['support__text-wrapper']}>
                        <div className={classes['support__text']}>
                            <p>
                                We offer a variety of math tutoring that fits our students
                                curriculum, <br /> from regular common core classes to advance
                                placement programs exams.
                            </p>
                            <PrimaryButton text='Try for free' />
                        </div>

                        <div className={classes['support__logo']}>
                            <div className={classes['support__logo-item']}>
                                <picture>
                                    <source srcset={LgcseWebp} type='image/webp' />
                                    <img src={Lgcse} width='151' height='151' alt='LGCSE logo' />
                                </picture>
                            </div>
                            <div className={classes['support__logo-item']}>
                                <picture>
                                    <source srcset={IBLogoWebp} type='image/webp' />
                                    <img src={IBLogo} width='173' height='171' alt='IB logo' />
                                </picture>
                            </div>
                            <div className={classes['support__logo-item']}>
                                <picture>
                                    <source srcset={APLogoWebp} type='image/webp' />
                                    <img src={APLogo} width='350' height='111' alt='AP logo' />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
