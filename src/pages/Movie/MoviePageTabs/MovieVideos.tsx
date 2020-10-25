import * as React from 'react'
import {MovieVideoType} from "../../../types/types";


interface IMovieVideosProps {
        id: string
        videos: MovieVideoType[]
        getVideos:() => Promise<void>
}

const MovieVideos: React.FC<IMovieVideosProps>  = ({videos,getVideos,id}) => {

    React.useEffect(() => {
        getVideos()
    }, [id])


    return (
        <div>
            {
                videos && videos.map((video) => (
                    <div key={video.id}>
                        <iframe
                            title={`${video.type}: ${video.name}`}
                            width="100%"
                            height="260"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))
            }
        </div>
    );
}

export default MovieVideos;