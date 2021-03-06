import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    width:100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height:100%;

    button{
        border-radius: 0 0 20px 20px;
    }

    img{
        max-height:250px;
        object-fit: cover;
        border-radis: 20px 20 px 0 0;
    }

    div{
        font-family: Arial, Helevetica, sans-seriff;
        padding:1rem;
        height:100%;
    }
`;