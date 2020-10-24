import * as React from 'react'
import Slider from "react-slick";
import HorizontalMovieCard from '../MovieCard/HorizontalMovieCard'
import {collectionMovie} from "../../types/types";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


let basicMovie = {
    title: 'Second War',
    id: '324',
    backdrop_path: ''
}
function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (

        <div style={{cursor: 'pointer', width: '60px', height: '40px'}}>
            <KeyboardArrowRightIcon  fontSize="large" onClick={onClick} />
        </div>

        /*<div
            className={className}
            style={{ ...style, display: "block",width:'100px', height: '100px', background: "red" }}
            onClick={onClick}
        />*/
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
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div style={{cursor: 'pointer', width: '60px', height: '40px'}}>
            <ArrowBackIosIcon  onClick={onClick} />
        </div>

    );
}

class CustomSlide extends React.Component<any,any> {
    render() {
        const { index, ...props } = this.props;
        return (
            <div {...props} style={{padding: '40px', border: '1px solid blue', width: '150px', height: '100px'}}>
                <h3>{index}</h3>
            </div>
        );
    }
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