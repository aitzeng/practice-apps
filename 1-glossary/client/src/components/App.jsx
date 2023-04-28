import React from "react";
import AddWord from './AddWord.jsx';
import axios from 'axios';
import WordList from './WordList.jsx';
import Search from './Search.jsx';

const { useState, useEffect } = React;

const App = () => {

  const [wordList, setWordList] = useState([]);
  const [modList, setModList] = useState(wordList);
  const [filtList, setFiltList] = useState(modList);

  let server = '/glossary';
  // console.log('Hello');
  useEffect(() => {
    grab()
  }, [])

  // How does changing setFiltList(filtered) to blank, maintain the current state? I understand this is needed so when modList pulls from wordList, filtList pulls from modList. I understand that modList is never changed. I don't understand how modList gets triggered so setFiltList(modList) is invoked
  useEffect(() => {
    // console.log('Rerun of useEffect')
    setFiltList(modList)
  }, [modList])

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
      // console.log('# of documents deleted:', result.data)
      grab();
    })
    .catch((error) => {
      console.log('Unable to delete')
    })
  }

  const filtering = (value) => {
    let filtered = modList.filter((item) => {
      // console.log('this is modList:', modList)
      return item.word.toLowerCase().includes(value)
    })
    setFiltList(filtered);
    // setModList(['Staffew']);
  }

  return (

    <div>
      <AddWord submitAdd={submitAdd} /> <Search filtering={filtering}/>
      <table>
        <thead>
        <tr>
          <td>WORD</td>
          <td>DEFINITION</td>
        </tr>
      </thead>
        <WordList items={filtList} update={update} deleter={deleter}/>
      </table>
    </div>
  )
}

export default App;