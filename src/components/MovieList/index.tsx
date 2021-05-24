import { Container } from "./styles";
import { api }  from '../../services/api'
import { useEffect, useState } from "react";

interface MovieProps{
    id:number,
    title: string,
    genre: string,
    duration:string,
    synpsis: string,
    year: string,
    age: string,
    poster: string,
};

export function MovieList(){
    const [movies, setMovies] = useState<MovieProps[]>([]);

    useEffect(()=>{
        api.get('/movies')
        .then(response => setMovies(response.data.movies));
    },[])

    console.log(movies);

    return (
        <Container>
        <strong>Filmes</strong>
        <ul>
        {movies.map( movie => (
            <li key={movie.id}>
                <img src={movie.poster} alt={movie.title} />
            </li>
        ))}
        </ul>
        </Container>
    );
}