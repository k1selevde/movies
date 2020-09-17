import * as React from 'react'

interface MoviePageProps {
    id: string
}

interface MoviePageState {

}

class MoviePage extends React.Component<MoviePageProps,MoviePageState> {
    render() {
        const {id} = this.props;
        return (
            <div>
                Movie PAGE!11, {id}
            </div>
        )
    }
}
export default MoviePage