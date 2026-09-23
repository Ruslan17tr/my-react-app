import axios from "axios";
import type { IMovie, MovieList } from "../models/movies";
import type { GenreListType  } from "../models/genre";

export async function fetchMovies(id: number): Promise<IMovie> {
    const response = await axios.get(`https://cinemaguide.skillbox.cc/movie/${id}`)
    return response.data
}

export async function fetchGenreMovies(genre: string): Promise<IMovie[]> {
    const response = await axios.get(`https://cinemaguide.skillbox.cc/movie?genre=${genre}`)
    return response.data
    
}

export async function fetchTitleMovies(title: string): Promise<IMovie[]> {
    const response = await axios.get(`https://cinemaguide.skillbox.cc/movie?title=${title}`)
    return response.data
}

export async function fetchGenres(): Promise<GenreListType> {
    const response = await axios.get('https://cinemaguide.skillbox.cc/movie/genres')
    return response.data
}

export async function fetchRandomMovies(): Promise<IMovie> {
    const response = await axios.get('https://cinemaguide.skillbox.cc/movie/random')
    return response.data
}

export async function fetchTopMovies(): Promise<MovieList> {
    const response = await axios.get('https://cinemaguide.skillbox.cc/movie/top10')
    return response.data
}