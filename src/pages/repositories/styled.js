import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const Tintle = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`
export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 6rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #066996;
    padding: .5rem 0;
    border-radius: 0 8px 8px 0;
    font-size: 2rem;
    text-decoration: none;
    font-family: serif;
    color: #fdfdfd;
`;