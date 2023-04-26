import React from "react";
import AddWord from './AddWord.jsx';
import axios from 'axios';
import WordList from './WordList.jsx';

const { useState, useEffect } = React;

const App = () => {

  const [wordList, setWordList] = useState([]);
  const [modList, setModList] = useState(wordList);

  let server = '/glossary';

  useEffect(() => {
    grab()
  }, [])

  const submitAdd = function(info) {
    axios.post(server, info)
    .then((response) => {
      grab();
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const grab = () => {
    axios(server)
    .then((result) => {
      setModList(result.data)
    })
  }

  return (

    <div>
      <AddWord submitAdd={submitAdd} />
      <table>
        <thead>
        <tr>
          <td>WORD</td>
          <td>DEFINITION</td>
        </tr>
      </thead>
        <WordList items={modList}/>
      </table>
    </div>
  )
}

export default App;