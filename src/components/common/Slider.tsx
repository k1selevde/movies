import * as React from 'react'
import Slider from "react-slick";
import HorizontalMovieCard from '../MovieCard/HorizontalMovieCard'
import {collectionMovie} from "../../types/types";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

/**/
//@ts-ignore
import NextArrow from '../../assets/icons/right-arrow.svg'

//@ts-ignore
import PrevArrow from '../../assets/icons/left-arrow.svg'


function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        //@ts-ignore
        <div>
            <img
                className="arrow arrow__next"
                src={NextArrow}
                alt="right-arrow"
                onClick={onClick}
            />
        </div>

    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        //@ts-ignore
        <div>
            <img
                className="arrow arrow__prev"
                src={PrevArrow}
                alt="left-arrow"
                onClick={onClick}
            />
        </div>

    );
}


function  AppendDots(dots: any) {
    return (
        <div
            style={{
                backgroundColor: "#ddd",
                borderRadius: "10px",
                padding: "10px"
            }}
        >
            <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
    )
}





interface SpecialCollectionProps {
    moviesArr: collectionMovie[]
}
interface SpecialCollectionState {}

class MySlider extends React.PureComponent<SpecialCollectionProps,SpecialCollectionState> {
    render() {
        let {moviesArr = []} = this.props;
        var settings = {
            dots: false,
            swipe: true,
            infinite: true,
            // centerMode: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
        };
        return (
            <>
                <div style={{margin: '0 auto'}}>
                    <Slider {...settings}>
                        {moviesArr.map((mov) => (
                            <HorizontalMovieCard movie={mov}/>
                        ))}
                    </Slider>
                </div>
            </>

        )
    }
}

export default MySlider;