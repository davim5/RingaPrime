import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px;

    strong{
        font-size: 24px;
    }

    ul {
        list-style: none;
        display: flex;

        li {
            margin: 20px;
            background: lightgray;
            width: 267px;
            height: 150px;

            img{
                width: 267px;
                height: 150px;
            }

        }
    }
`;