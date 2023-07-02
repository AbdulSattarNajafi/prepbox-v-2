import { blogPosts } from '../../constant';
import SecondaryButton from '../button/secondary-button';
import BlogCard from '../elements/blog-card';

import classes from './blog-posts.module.css';

const BlogPosts = () => {
    return (
        <section className={classes.blog}>
            <div className={classes['blog-container']}>
                <h1>Our Blog</h1>

                <div className={classes['blog__header']}>
                    <SecondaryButton text='Education' />
                    <SecondaryButton text='Youtube' />
                    <SecondaryButton text='Student Highlight' />
                    <SecondaryButton text='Tutor Highlight' />
                </div>

                <div className={classes['blog__grid']}>
                    {blogPosts.map((post) => {
                        return (
                            <BlogCard
                                key={post.id}
                                image={post.image}
                                subtitle={post.subtitle}
                                description={post.description}
                                postId={post.id}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BlogPosts;
