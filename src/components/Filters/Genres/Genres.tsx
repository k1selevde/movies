import * as React from 'react'
import cn from 'classnames'

export type Genre = {
    name: string,
    isSelected: boolean,
    id: string
}

interface IGenresProps {
    genres: Array<Genre>,
    updateGenres: (data: string) => void,
    getGenres: () => void
    clear: () => {}
}


const Genres: React.FC<IGenresProps> = ({genres,updateGenres,getGenres,clear}) => {

    React.useEffect(() => {
        if (!(genres && genres[0])) {
            getGenres()
        }
        return () => {
            clear()
        }
    }, [])


    const changeGenreHandler = (name: string) => {
        updateGenres(name);
    }


    return (
        <div className="genres__wrapper">
            <h3 className="genres__title">Жанры</h3>
            <div className="genres__list">
                {genres && genres.map(genre => (
                    <div key={genre.id} className="genre__block">
                        <div
                            onClick={() => changeGenreHandler(genre.name)}
                            className={cn("genre__name",
                            {["genre__name--active"]: genre.isSelected}
                        )}
                        >
                            {genre.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

}

export default Genres