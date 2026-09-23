import axios from "axios";
import type { MovieList } from "../models/movies";
import type { IProfile } from "../models/User";




export async function fetchFavorites(): Promise<MovieList> {
    const response = await axios.get('https://cinemaguide.skillbox.cc/favorites',
        { withCredentials: true }
    )
    return response.data
}


export async function postFavorites(id: string): Promise<IProfile> {
    const response = await axios.post<IProfile>('https://cinemaguide.skillbox.cc/favorites',
        { id },
        { withCredentials: true }
    )
    return response.data
}

export async function deleteFavorites(id: string): Promise<IProfile> {
    const response = await axios.delete<IProfile>(`https://cinemaguide.skillbox.cc/favorites/${id}`,
 { withCredentials: true }
    )
    return response.data
}
