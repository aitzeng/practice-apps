import React from 'react';

const { useState, useEffect } = React;

const AddWord = ({submitAdd}) => {

  const [newWord, setNewWord] = useState("");
  const [newDef, setNewDef] = useState("");

  const submitWord = (e) => {
    e.preventDefault();
    let info = { word: newWord, definition: newDef };
    submitAdd(info)
    setNewWord('');
    setNewDef('');
  }

  const typeWord = (e) => {
    setNewWord(e.target.value);
  }

  const typeDef = (e) => {
    setNewDef(e.target.value)
  }

  return (

    <form onSubmit={submitWord}>
      <input type="text" onChange={typeWord} placeholder="Word" value={newWord}/>
      <input type="text" onChange={typeDef} placeholder="Definition" value={newDef}/>
      <input type="submit" value="Add Word" />
    </form>

  )
}

export default AddWord;