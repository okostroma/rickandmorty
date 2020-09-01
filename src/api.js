import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
})


export const appAPI = {
    getEpisodes() {
        return instance.get('episode').then(res => res.data)
    },
    getCharacters() {
        return instance.get('character').then(res => res.data)
    }

}



