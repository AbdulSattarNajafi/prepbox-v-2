import classes from './Primary-button.module.css';

const PrimaryButton = ({ text }) => {
    return (
        <a
            href='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-07'
            target='_blank'
            rel='noreferrer'
            className={classes.btn}
        >
            {text}
        </a>
    );
};

export default PrimaryButton;
