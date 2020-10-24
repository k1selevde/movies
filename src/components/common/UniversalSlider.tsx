import * as React from 'react'
import Slider from "react-slick";
import {collectionMovie} from "../../types/types";
import PosterMovieCard from "../MovieCard/PosterMovieCard";

//@ts-ignore
import NextArrow from "../../assets/icons/right-arrow.svg";

//@ts-ignore
import PrevArrow from "../../assets/icons/left-arrow.svg";





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

interface IUniversalSliderProps {
    moviesArr: collectionMovie[]
}

interface IUniversalSliderState {}

class UniversalSlider extends React.PureComponent<IUniversalSliderProps,IUniversalSliderState> {
    render() {
        let {moviesArr = []} = this.props;
        var settings = {
            className: "center",
            dots: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            swipe: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <>
                <div style={{margin: '0 auto'}}>
                    <Slider {...settings}>
                        {moviesArr.map((mov)=>(
                            <PosterMovieCard movie={mov}/>
                        ))}
                    </Slider>
                </div>
            </>

        )
    }
}

export default UniversalSlider;