import Georgetown from './../../assets/images/png/georgetown.png';
import GeorgetownWebp from './../../assets/images/webp/georgetown.webp';
import Harvard from './../../assets/images/png/harvard.png';
import HarvardWebp from './../../assets/images/webp/harvard.webp';
import Northwestern from './../../assets/images/png/northwestern.png';
import NorthwesternWebp from './../../assets/images/webp/northwestern.webp';
import Toronto from './../../assets/images/png/toronto.png';
import TorontoWebp from './../../assets/images/webp/toronto.webp';
import Waterloo from './../../assets/images/png/waterloo.png';
import WaterlooWebp from './../../assets/images/webp/waterloo.webp';

import classes from './Admission.module.css';

const Admission = () => {
    return (
        <section>
            <div className='container'>
                <div>
                    <p className={classes['admission-text']}>
                        Our students received admissions from:
                    </p>

                    <ul className={classes['admission__universities']}>
                        <li>
                            <picture>
                                <source srcset={GeorgetownWebp} type='image/webp' />
                                <img src={Georgetown} alt='Georgetown University' />
                            </picture>
                        </li>
                        <li>
                            <picture>
                                <source srcset={HarvardWebp} type='image/webp' />
                                <img src={Harvard} alt='Harvard University' />
                            </picture>
                        </li>
                        <li>
                            <picture>
                                <source srcset={NorthwesternWebp} type='image/webp' />
                                <img src={Northwestern} alt='Northwestern University' />
                            </picture>
                        </li>
                        <li>
                            <picture>
                                <source srcset={TorontoWebp} type='image/webp' />
                                <img src={Toronto} alt='Toronto University' />
                            </picture>
                        </li>
                        <li>
                            <picture>
                                <source srcset={WaterlooWebp} type='image/webp' />
                                <img src={Waterloo} alt='Waterloo University' />
                            </picture>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Admission;
