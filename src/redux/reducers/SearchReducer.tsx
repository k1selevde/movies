import {searchActions} from "../actions/searchActions"
import {InferActionsTypes} from "../store";
import {search, searchMovies, searchPeople, oftenPeople, oftenMovies} from "../actions/actionTypes";
import produce from "immer";
import {searchResultMovie, searchResultPerson} from "../../types/types";

const initialState = {
    searchValue: '',
    results: {
        oftenPeople: null as null | any,
        oftenMovies: null as null | any,
        movies: null as null | any,
        people: null as null | any
    },
    searchField: {
        isHidden: true
    },
    cache: {
        movies: [
            { popularity: 166.3,id: 453405, backdrop_path: "/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg",title: "Gemini Man",vote_average: 6.4},
            { popularity: 173.337,id: 429617, backdrop_path: "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",title: "Spider-Man: Far from Home", vote_average: 7.6},
            { popularity: 172.899,id: 680028, backdrop_path: "/kmxnUYcisJDED8oNNIRd9QwWYYP.jpg", title: "Centigrade", vote_average: 6.9},
            { popularity: 158.413,id: 347201, backdrop_path: "/zUfAxyHUKzVh6err0dMly7ysuM3.jpg", title: "Boruto: Naruto the Movie", vote_average: 7.8},
            { popularity: 152.213,id: 579583, backdrop_path: "/5rwcd24GGltKiqdPT4G2dmchLr9.jpg", title: "The King of Staten Island", vote_average: 6.8}
        ],
        people: [
            {name: 'Том Круз', id: '500'},
            {name: 'Scarlett Johansson', id: '1245'},
            {name: 'Dwayne Johnson', id: '18918'},
            {name: 'Erin Moriarty', id: '990393'},
            {name: 'Jason Statham', id: '976'},
            {name: 'Brad Pitt', id: '287'}
            ]
    }
}

type InitialStateType = typeof initialState;



const reducer = (state = initialState, action: any): InitialStateType => {
    return produce(state,draftState => {
        switch (action.type) {
            case 'SEARCH/UPDATE_SEARCH':
                draftState.searchValue = action.payload
                break;
            case search.CLEAR:
                draftState.searchValue = ''
                break;
            case 'SEARCH/TOGGLE__SEARCH_FIELD':
                draftState.searchField.isHidden = !state.searchField.isHidden
                break;
            case searchMovies.GET_SUCCESS:
                draftState.results.movies = action.payload
                break;
            case searchPeople.GET_SUCCESS:
                draftState.results.people = action.payload
                break;
            case searchPeople.CLEAR:
                draftState.results.people = null
                break;
            case searchPeople.UPDATE:
                draftState.results.people.results = draftState.results.people.results.concat(action.payload)
                break;
            case searchMovies.CLEAR:
                draftState.results.movies = null
                break;
            case searchMovies.UPDATE:
                draftState.results.movies.results = state.results.movies.results.concat(action.payload)
                break;
            case oftenPeople.GET__SUCCESS:
                draftState.results.oftenPeople = action.payload
                break;
            case oftenPeople.CLEAR:
                draftState.results.oftenPeople = null
                break;
            case oftenPeople.UPDATE:
                draftState.results.oftenPeople.results = draftState.results.oftenPeople.results.concat(action.payload)
                break;
            case oftenMovies.GET__SUCCESS:
                draftState.results.oftenMovies = action.payload
                break;
            case oftenMovies.UPDATE:
                draftState.results.oftenMovies.results = state.results.oftenMovies.results.concat(action.payload)
                break;
            case oftenMovies.CLEAR:
                draftState.results.oftenMovies = null
                break;
            default:
                return draftState;
        }
    })
}

type SearchActionsType = ReturnType<InferActionsTypes<typeof searchActions>>

export default reducer;