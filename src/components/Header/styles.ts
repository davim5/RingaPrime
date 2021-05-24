import styled from 'styled-components';

export const Container = styled.header`
    height: 50px;
    background-color: orange;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    
    box-shadow: 0 8px 6px -6px black;

    img{
        height: 40px;
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

            transition: text-decoration .2s;

            &:hover{
                text-decoration: underline;
            }
        }
    }
`
