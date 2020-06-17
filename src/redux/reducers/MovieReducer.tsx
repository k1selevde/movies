import {Reducer} from 'redux'
const UPDATE_GENRE = 'MOVIE/UPDATE-GENRE'



/*
type Genre = {
    name: string,
    isSelected: boolean
}
*/


type InitialStateType = typeof initialState;

const initialState = {
    movieList: Array,
    genres: [
        {name: 'боевик', isSelected: true, id: '123'},
        {name: 'приключение', isSelected: false, id: '223'},
        {name: 'комедия', isSelected: false, id: '323'},
        {name: 'драма', isSelected: false, id: '423'}
    ],
    sorting: [
        {option: 'sort_by_voz'},
        {option: 'sort_by_ybiv'},
    ]

}

const reducer: Reducer<InitialStateType> = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case UPDATE_GENRE:
            return {
                ...state,
                genres: [
                    ...state.genres.map(genre =>
                        {
                            if (genre.name === action.payload) {
                            genre.isSelected = !genre.isSelected;
                        }
                    return genre;
                })
                ]
            }
    }
    return state;
}

export function updateGenres(name: string) {
    return {
        type: UPDATE_GENRE,
        payload: name
    }
}

export default reducer;