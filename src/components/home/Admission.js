import Georgetown from './../../assets/images/georgetown.png';
import Harvard from './../../assets/images/harvard.png';
import Northwestern from './../../assets/images/northwestern.png';
import Toronto from './../../assets/images/toronto.png';
import Waterloo from './../../assets/images/waterloo.png';

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
                            <img src={Georgetown} alt='Georgetown University' />
                        </li>
                        <li>
                            <img src={Harvard} alt='Harvard University' />
                        </li>
                        <li>
                            <img src={Northwestern} alt='Northwestern University' />
                        </li>
                        <li>
                            <img src={Toronto} alt='Toronto University' />
                        </li>
                        <li>
                            <img src={Waterloo} alt='Waterloo University' />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Admission;
