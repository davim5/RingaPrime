import { Container } from "./styles";
import { api }  from '../../services/api'


export function MovieList(){

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