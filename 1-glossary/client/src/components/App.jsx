import React from "react";
import AddWord from './AddWord.jsx';

const App = () => {

  let server = 'http://localhost:3000/glossary/word'

  const submitAdd = function(word, definition) {
    let data = {word: definition};
    axios.post(server, data)
  }

  return (

    <div>
      <AddWord submitAdd={submitAdd} />
    </div>
  )
}

export default App;