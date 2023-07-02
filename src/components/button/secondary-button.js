import classes from './secondary-button.module.css';

const SecondaryButton = ({ text, onClick }) => {
    return (
        <button type='button' onClick={onClick} className={classes.btn}>
            {text}
        </button>
    );
};

export default SecondaryButton;
