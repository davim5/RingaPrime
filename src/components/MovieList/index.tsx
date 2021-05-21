import { Container } from "./styles";
import { api }  from '../../services/api'
import { useEffect } from "react";


export function MovieList(){

    useEffect(()=>{
        api.get('/movies')
        .then(response => console.log(response.data))
    },[])
    return (
        <Container>
        <strong>Filmes</strong>
        <ul>
            <li>
                <img src="" alt="poster" />
            </li>
            <li>
                <img src="" alt="poster" />
            </li>
            <li>
                <img src="" alt="poster" />
            </li>
            <li>
                <img src="" alt="poster" />
            </li>
        </ul>
        </Container>
    );
}