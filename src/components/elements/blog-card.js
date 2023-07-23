import { useNavigate } from 'react-router-dom';
import classes from './blog-card.module.css';

const BlogCard = ({ image, webpImage, title, subtitle, link, postId }) => {
    const navigate = useNavigate();

    const postDetailHandler = () => {
        if (postId) {
            navigate(`${postId}`);
        }
    };

    return (
        <div className={classes.card} onClick={postDetailHandler}>
            <div className={classes['card__image']}>
                <picture>
                    <source srcset={webpImage} type='image/webp' />
                    <img src={image} alt={subtitle} width='282' height='208' />
                </picture>
            </div>
            <div className={classes['card__body']}>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default BlogCard;
