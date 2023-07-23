import classes from './team-card.module.css';

const TeamCard = ({ image, webpImage, name, description, experience, almamater }) => {
    return (
        <div className={classes.card}>
            <div className={classes['card__image']}>
                <div className={classes['card__image-wrapper']}>
                    <picture>
                        <source srcset={webpImage} type='image/webp' />
                        <img src={image} alt={name} />
                    </picture>
                </div>
            </div>
            <div className={classes['card__body']}>
                <h5>{name}</h5>
                <p>{description}</p>
                <p>Teaching Experience: {experience}</p>
                <p>Alma mater: {almamater}</p>
            </div>
        </div>
    );
};

export default TeamCard;
