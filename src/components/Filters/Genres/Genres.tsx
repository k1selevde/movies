import * as React from 'react'


export type Genre = {
    name: string,
    isSelected: boolean,
    id: string
}

type GenresProps = {
    genres: Array<Genre>,
    updateGenres: (data: string) => void
}

type GenresState = {

}

class Genres extends React.Component<GenresProps,GenresState> {

    constructor(props: any) {
        super(props)
        this.changeGenreHandler = this.changeGenreHandler.bind(this)
    }

     changeGenreHandler(name: string, e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        alert('hell')
        this.props.updateGenres(name);
    }

/*
    componentDidUpdate() {
        alert('UPDATE')
    }
*/

    render() {
        const {genres} = this.props;
        return (
            <div className="genres__wrapper">
                <h3 className="genres__title">Жанры</h3>
                <div className="genres__list">
                    {genres && genres.map(genre => (
                        <div key={genre.id} className="genre__block">
                            <input
                                type="checkbox"
                                // value={genre.id}
                                checked={genre.isSelected}
                                // defaultChecked={genre.isSelected}
                                onChange={(e) => this.changeGenreHandler(genre.name,e)}
                                className="genre__checkbox"
                                id={genre.name}
                            />
                            <label htmlFor={genre.name} className="genre__name">{genre.name}</label>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}

/*const defaultProps = {
    genres: [
        {name: 'боевик', isSelected: true, id: '123'},
        {name: 'приключение', isSelected: false, id: '223'},
        {name: 'комедия', isSelected: false, id: '323'},
        {name: 'драма', isSelected: false, id: '423'}
    ]
}


Genres.defaultProps = defaultProps;*/

export default Genres