import Slider from 'react-slick';
import SliderItem from './Slider-item';
import SliderImg1 from './../../assets/images/slider-1.png';
import SliderImg2 from './../../assets/images/slider-2.png';
import SliderImg3 from './../../assets/images/slider-3.png';
import SliderImg4 from './../../assets/images/slider-4.png';
import SliderImg5 from './../../assets/images/slider-5.png';
import SliderImg6 from './../../assets/images/slider-6.png';

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
                    text='We tutor based on our students curriculum needs'
                    image={SliderImg1}
                />
                <SliderItem
                    label='2'
                    title='Watch lectures'
                    text='We have hundreds of lectures to demonstrate solutions'
                    image={SliderImg2}
                />

                <SliderItem
                    label='3'
                    title='Solving questions'
                    text='Students begin solving questions, while monitored by their tutor'
                    image={SliderImg3}
                />

                <SliderItem
                    label='4'
                    title='Submit work'
                    text='Our tutors immediately grade and gives feedback'
                    image={SliderImg4}
                />

                <SliderItem
                    label='5'
                    title='Questions'
                    text='When students needs clarification, our tutors dive in and provide  guidance until there are no more confusion'
                    image={SliderImg5}
                />

                <SliderItem
                    label='6'
                    title='Mastery'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                    image={SliderImg6}
                />
            </Slider>
        </>
    );
};

export default SliderComponent;
