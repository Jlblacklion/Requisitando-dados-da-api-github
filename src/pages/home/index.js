import React, {useState} from 'react';
import axios from 'axios';

import * as S from './styled';

import {useHistory} from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [user, setUser] = useState ('');

  // Consumindo dados com Axios
  function handleSearch(){
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => {

      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/Repositors');
      // console.log(repositoriesName);
    });
  }

  return (
    // Controled Components = Não precisa de um "ID" nem "Name" e são sempre a nossa única fonte de vrdade
    //Fragment
    <S.Container>
      {/* <p> {user} </p> */}
      <S.Input type="text" placeholder="User_data" value={user} onChange={e => setUser(e.target.value)} />
      <S.Button type="button" onClick={handleSearch}> Search </S.Button>
    </S.Container>
  );
}

export default App;
