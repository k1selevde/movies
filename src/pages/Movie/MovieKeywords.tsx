import * as React from 'react'
import {getMovieKeywords} from "../../redux/actions/movieActions";
import {movieKeywordType} from "../../types/types";

interface IMovieKeywordsProps {
    keywords: null | movieKeywordType[]
    getKeywords: () => Promise<void>
    id: string
}

const MovieKeywords : React.FC<IMovieKeywordsProps> = ({id,keywords, getKeywords}) => {

    React.useEffect(() => {
        getKeywords()
    }, [id])

    return(
        <>
            <div>keywords</div>
            <div>{keywords && keywords.map((key:movieKeywordType) =>(
                <div key={key.id}>{key.id}#{key.name}</div>
            ))}</div>
        </>
    )
}

export default MovieKeywords;