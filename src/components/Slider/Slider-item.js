import classes from './Slider-item.module.css';

const SliderItem = ({ label, title, text, image, webpImage }) => {
    return (
        <div className={classes.slide}>
            <div className={classes['slide__text']}>
                <div className={classes['slide__text-title']}>
                    <div className={classes['slide__text-label']}>{label}</div>
                    <h3>{title}</h3>
                </div>
                <p>{text}</p>
            </div>
            <div className={classes['slide__image']}>
                <picture>
                    <source srcset={webpImage} type='image/webp' />
                    <img src={image} width='450' height='383' alt={title} />
                </picture>
            </div>
            <div className={classes['slide__placeholder']}></div>
        </div>
    );
};

export default SliderItem;
