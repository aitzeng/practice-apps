import React from "react";
import AddWord from './AddWord.jsx';
import axios from 'axios';

const { useState, useEffect } = React;

const App = () => {

  const [wordList, setWordList] = useState('');

  let server = '/glossary'

  const submitAdd = function(info) {
    axios.post(server, info)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (

    <div>
      <AddWord submitAdd={submitAdd} />
      <WordEntry/>
    </div>
  )
}

export default App;