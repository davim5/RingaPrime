import styled from 'styled-components';

export const Container = styled.header`
    height: 50px;
    background-color: orange;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    img{
        height: 50px;
    }

    ul{
        list-style: none;
        display: flex;

        li{
            margin: 10px;

            a{
                text-decoration: none;
                color: inherit;
            }

            &:hover{
                text-decoration: underline;
            }
        }
    }
`
