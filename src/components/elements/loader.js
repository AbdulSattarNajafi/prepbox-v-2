import classes from './loader.module.css';

const Loader = () => {
    return (
        <div className={classes.loaderContainer}>
            <div class={classes.loader}>Loading...</div>
        </div>
    );
};

export default Loader;
