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

  const update = (info) => {
    axios.put(server, info)
    .then((result) => {
      console.log('Updated From:', result.data)
      grab();
    })
    .catch((error) => {
      console.log('Unable to update')
    })
  }

  const deleter = (info) => {
    axios.delete(`/glossary/${info}`)
    .then((result) => {
      console.log('# of documents deleted:', result.data)
      grab();
    })
    .catch((error) => {
      console.log('Unable to delete')
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
        <WordList items={modList} update={update} deleter={deleter}/>
      </table>
    </div>
  )
}

export default App;