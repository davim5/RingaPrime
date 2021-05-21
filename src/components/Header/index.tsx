import react from 'react'
import { Container } from './styles'
import Logo from '../../images/logo.png'

export function Header(){
    return (
        <Container>
            <img src={Logo} alt="Logo" />
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Series</a></li>
                <li><a href="#">Filmes</a></li>
                <li><a href="#">Infantil</a></li>
                <li><a href="#">Canais</a></li>
            </ul>
            <input type="search" name="" id="" />
            <div>
                <label htmlFor=""></label>
                <span>User</span>
            </div>
        </Container>
        )
};