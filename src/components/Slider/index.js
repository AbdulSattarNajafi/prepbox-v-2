import Slider from 'react-slick';
import SliderItem from './Slider-item';

import SliderImg1 from './../../assets/images/png/slider-1.png';
import SliderImg1Webp from './../../assets/images/webp/slider-1.webp';
import SliderImg2 from './../../assets/images/png/slider-2.png';
import SliderImg2Webp from './../../assets/images/webp/slider-2.webp';
import SliderImg3 from './../../assets/images/png/slider-3.png';
import SliderImg3Webp from './../../assets/images/webp/slider-3.webp';
import SliderImg4 from './../../assets/images/png/slider-4.png';
import SliderImg4Webp from './../../assets/images/webp/slider-4.webp';
import SliderImg5 from './../../assets/images/png/slider-5.png';
import SliderImg5Webp from './../../assets/images/webp/slider-5.webp';
import SliderImg6 from './../../assets/images/png/slider-6.png';
import SliderImg6Webp from './../../assets/images/webp/slider-6.webp';

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
            <Slider {...settings}>
                <SliderItem
                    label='1'
                    title='Syllabus matching'
                    text='We design the courses based on curriculum needs'
                    image={SliderImg1}
                    webpImage={SliderImg1Webp}
                />
                <SliderItem
                    label='2'
                    title='Watch mini-lectures'
                    text='Learn core concepts through our short mini-lectures'
                    image={SliderImg2}
                    webpImage={SliderImg2Webp}
                />

                <SliderItem
                    label='3'
                    title='Solve questions'
                    text='Students begin solving questions on our whiteboard while our tutors monitor'
                    image={SliderImg3}
                    webpImage={SliderImg3Webp}
                />

                <SliderItem
                    label='4'
                    title='Submit & get marked  '
                    text='Our tutors immediately grade and gives feedback within minutes'
                    image={SliderImg4}
                    webpImage={SliderImg4Webp}
                />

                <SliderItem
                    label='5'
                    title='Ask questions'
                    text='When students needs clarification, our tutors answer in real-time'
                    image={SliderImg5}
                    webpImage={SliderImg5Webp}
                />

                <SliderItem
                    label='6'
                    title='Review and master'
                    text='Generate similar questions of the ones you got wrong until you master the subject'
                    image={SliderImg6}
                    webpImage={SliderImg6Webp}
                />
            </Slider>
        </>
    );
};

export default SliderComponent;
