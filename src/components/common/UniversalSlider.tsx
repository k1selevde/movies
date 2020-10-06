import * as React from 'react'
import Slider from "react-slick";
import VerticalMovieCard from '../MovieCard/VerticalMovieCard'
import {collectionMovie} from "../../types/types";

let basicMovie = {
    title: 'Second War',
    id: '324',
    backdrop_path: ''
}
function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block",width:'100px', height: '100px', background: "red" }}
            onClick={onClick}
        />
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
        <div
            className={className}
            style={{ ...style,width:'100px', height: '100px', display: "block", background: "red" }}
            onClick={onClick}
        />
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

interface IUniversalSliderProps {
    moviesArr: collectionMovie[]
}

interface IUniversalSliderState {}

class UniversalSlider extends React.PureComponent<IUniversalSliderProps,IUniversalSliderState> {
    render() {
        let {moviesArr = []} = this.props;
        var settings = {
            dots: false,
            swipe: true,
            infinite: true,
            // centerMode: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            appendDots: (dots: any) => (
                <div
                    style={{
                        backgroundColor: "blue",
                        borderRadius: "20px",
                        padding: "10px"
                    }}
                >
                    <ul className="d-flex">
                        {dots.map((dot: any) => (
                            <div
                                style={{
                                    borderRadius: '10px',
                                    width: '30px',
                                    height: '30px'
                                }}
                            >
                                {dot}
                            </div>
                        ))}
                    </ul>
                </div>
            ),
        };
        return (
            <>
                <div style={{margin: '0 auto'}}>
                    <Slider {...settings}>
                        {moviesArr.map((mov)=>(
                            <VerticalMovieCard movie={mov}/>
                        ))}
                    </Slider>
                </div>
            </>

        )
    }
}

export default UniversalSlider;