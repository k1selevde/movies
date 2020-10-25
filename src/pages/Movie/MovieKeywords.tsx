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

    let keywordsStr = (keywords && keywords[0]) ? keywords.map(word => word.name).join('#') : ''

    return(
        <>
            <div
                className="movieKeywords"
            >
                {keywordsStr}
            </div>
        </>
    )
}

export default MovieKeywords;