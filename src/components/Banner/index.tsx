import banner from '../../images/banner.webp';
import { Container } from './styles';

export function Banner(){

    return(
        <Container>
            <img src={banner} alt="Serie ou filme em cartaz" />
        </Container>
    );
}