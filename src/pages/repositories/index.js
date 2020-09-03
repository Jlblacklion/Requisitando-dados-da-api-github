import React, {useEffect, useState} from 'react'; 

import * as S from './styled';




function Repositors(){
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() =>{
        let repositoriesNanme = localStorage.getItem('repositoriesName');
        repositoriesNanme = JSON.parse(repositoriesNanme);
        setRepositories(repositoriesNanme);
        // localStorage.clear();
    }, []);

    return (
        <S.Container>
            <S.Tintle> Lista de Repositorios </S.Tintle>
            <S.List>
                {repositories.map(repository => {
                    return (
                        <S.ListItem>Users Repositories:  {repository}  </S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/"> Back </S.LinkHome>
        </S.Container>
    )
}

export default Repositors;