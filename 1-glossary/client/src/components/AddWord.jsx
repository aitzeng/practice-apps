import React from 'react';

const { useState, useEffect } = React;

const AddWord = ({submitAdd}) => {

  const [newWord, setNewWord] = useState('');
  const [newDef, setNewDef] = useState('');

  const submitWord = (e) => {
    e.preventDefault();
    submitAdd(newWord, newDef)
    setNewWord('');
    setNewDef('');
  }

  return (

    <form>
      <input type="text" onChange={setNewWord} placeholder="Word"/>
      <input type="text" onChange={setNewDef} placeholder="Definition"/>
      <input type="submit" value="Add Word" onSubmit={}/>
    </form>

  )
}

export default AddWord;