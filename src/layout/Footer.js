import Instagram from './../assets/images/instagram.svg';
import Youtube from './../assets/images/youtube.svg';
import Linkedin from './../assets/images/linkedin.svg';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className='container'>
                <div className={classes['footer-content']}>
                    <div className={classes['footer__copyright']}>
                        <h5>Learn by Doing</h5>
                        <p>
                            &copy; {new Date().getFullYear()} - PrepAnywhere Inc. All Right
                            Reserved. 8 Heintzman Cres., Maple, ON, Canada
                        </p>
                    </div>

                    <div className={classes['footer__social']}>
                        <ul className={classes['footer__social-list']}>
                            <li>
                                <a
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img src={Instagram} alt='Instagram icon' />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img src={Youtube} alt='Instagram icon' />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img src={Linkedin} alt='Instagram icon' />
                                </a>
                            </li>
                        </ul>

                        <div className={classes['footer__links']}>
                            <a
                                href='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-07'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Privacy Policy
                            </a>
                            <a
                                href='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-07'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
