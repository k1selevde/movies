import * as React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import Slider from "../common/Slider";
import {collectionMovie} from "../../types/types";
import {connect}from 'react-redux'
import {AppStateType} from "../../redux/reducers";
import {specialCollectionType} from "../../redux/reducers/MovieReducer";


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

interface SpecialCollectionProps {
    getCollection: (category: string) => Promise<void>,
    category: string,
    children: collectionMovie[]
}

class SpecialCollection extends React.Component<SpecialCollectionProps> {
    state = {}

    componentDidMount(): void {
        console.log('Component here:)')
        let {getCollection,category} = this.props;
        getCollection(category)
    }

    componentDidUpdate() {
        let {children} = this.props;
        console.log('childs: ',children)
    }

    render() {
        let {category,children=[]} = this.props
        return (
            <>
                {children}
                <Slider moviesArr={children} />
            </>
     )
    }
}


export default SpecialCollection