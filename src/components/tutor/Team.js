import TeamCard from '../elements/team-card';

import TeamImage1 from './../../assets/images/png/min-lee.png';
import TeamImage1Webp from './../../assets/images/webp/min-lee.webp';
import TeamImage2 from './../../assets/images/png/sam-kwon.png';
import TeamImage2Webp from './../../assets/images/webp/sam-kwon.webp';
import TeamImage3 from './../../assets/images/png/jina-seok.png';
import TeamImage3Webp from './../../assets/images/webp/jina-seok.webp';
import TeamImage4 from './../../assets/images/png/aria-hwang.png';
import TeamImage4Webp from './../../assets/images/webp/aria-hwang.webp';
import TeamImage5 from './../../assets/images/png/payton-coutlis.png';
import TeamImage5Webp from './../../assets/images/webp/payton-coutlis.webp';
import TeamImage6 from './../../assets/images/png/kyle-pearce.png';
import TeamImage6Webp from './../../assets/images/webp/kyle-pearce.webp';
import TeamImage7 from './../../assets/images/png/sanghon-kim.png';
import TeamImage7Webp from './../../assets/images/webp/sanghon-kim.webp';

import classes from './Team.module.css';

const Team = () => {
    return (
        <section className={classes.team}>
            <div className='container'>
                <h3>Team</h3>

                <div className={classes['team__grid']}>
                    <TeamCard
                        image={TeamImage1}
                        webpImage={TeamImage1Webp}
                        name='Min Lee '
                        description='Founder/CEO'
                        experience='20 years'
                        almamater='University of Toronto'
                    />

                    <TeamCard
                        image={TeamImage2}
                        webpImage={TeamImage2Webp}
                        name='Sam Kwon '
                        description='Chief Growth Officer'
                        experience='2 years'
                        almamater='MIT'
                    />

                    <TeamCard
                        image={TeamImage3}
                        webpImage={TeamImage3Webp}
                        name='Jina Seok'
                        description='Senior Lead Tutor'
                        experience='5 years'
                        almamater='University of Toronto'
                    />

                    <TeamCard
                        image={TeamImage4}
                        webpImage={TeamImage4Webp}
                        name='Aria Hwang'
                        description='Assistant Tutor'
                        experience='3 years'
                        almamater='McMaster University'
                    />

                    <TeamCard
                        image={TeamImage5}
                        webpImage={TeamImage5Webp}
                        name='Payton Coutlis'
                        description='Lead Tutor Tutor'
                        experience='4 years'
                        almamater='Harvard University'
                    />
                </div>

                <h3>Advisory Board</h3>
                <div className={classes['team__grid']}>
                    <TeamCard
                        image={TeamImage6}
                        webpImage={TeamImage6Webp}
                        name='Kyle Pearce'
                        description='Consultant to School Board'
                        experience='16 years'
                        almamater='University of Windsor'
                    />

                    <TeamCard
                        image={TeamImage7}
                        webpImage={TeamImage7Webp}
                        name='Sanghon Kim'
                        description="Founder of Queen's College Seoul"
                        experience='15 years'
                        almamater='Oxford University'
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
