import classes from './team-card.module.css';

const TeamCard = ({ image, name, description }) => {
    return (
        <div className={classes.card}>
            <div className={classes['card__image']}>
                <div className={classes['card__image-wrapper']}>
                    <img src={image} alt={name} />
                </div>
            </div>
            <div className={classes['card__body']}>
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TeamCard;
