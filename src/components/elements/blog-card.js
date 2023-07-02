import { useNavigate } from 'react-router-dom';
import classes from './blog-card.module.css';

const BlogCard = ({ image, subtitle, description, postId }) => {
    const navigate = useNavigate();

    const postDetailHandler = () => {
        if (postId) {
            navigate(`${postId}`);
        }
    };

    return (
        <div className={classes.card} onClick={postDetailHandler}>
            <div className={classes['card__image']}>
                <img src={image} alt={subtitle} />
            </div>
            <div className={classes['card__body']}>
                <h4>{subtitle}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
