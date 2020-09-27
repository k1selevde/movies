import * as React from 'react'
import {getMovieKeywords} from "../../redux/actions/movieActions";
import {movieKeywordType} from "../../types/types";

interface IMovieKeywordsProps {
    keywords: null | movieKeywordType[],
    getKeywords: () => Promise<void>
}

class MovieKeywords extends React.PureComponent<IMovieKeywordsProps> {
    componentDidMount(): void {
        console.log('MOVIE KEYWORDS COMPONENT')
        this.props.getKeywords()
    }
    render() {
        const {keywords} = this.props
        return(
            <>
                <div>keywords</div>
                <div>{keywords && keywords.map((key:movieKeywordType) =>(
                    <div key={key.id}>{key.id}#{key.name}</div>
                ))}</div>
            </>
        )
    }
}

export default MovieKeywords;