import styled from 'styled-components';


export const Container = styled.div`
   // width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: nnone;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 2.1rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active {
        outline: nnone;
        box-shadow: none;
    }
`;

