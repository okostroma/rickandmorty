import {appAPI} from "./api";


const GET_ALL_EPISODES = 'GET_ALL_EPISODES';
const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';




const initialState = {
    episodes: [],
    characters: []
}



const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_EPISODES: {
            return {
                ...state, episodes: action.episodes
            }

        }
        case GET_ALL_CHARACTERS: {
            return {
                ...state, characters: action.characters
            }
        }
        default:
            return state;

    }

}

export default mainPageReducer;


const getEpisodesAC = (episodes)=> ({type: GET_ALL_EPISODES, episodes});
const getCharactersAC = (characters)=> ({type: GET_ALL_CHARACTERS, characters});


export const getEpisodesThunk = () => async (dispatch) => {
    try {
        const data = await appAPI.getEpisodes();
        dispatch(getEpisodesAC(data.results))
    } catch (e) {
        console.log(e)
    }
}

export const getCharactersThunk = () => async (dispatch) => {
    try {
        const data = await appAPI.getCharacters();
        dispatch(getCharactersAC(data.results))
    } catch (e) {
        console.log(e)
    }
}



