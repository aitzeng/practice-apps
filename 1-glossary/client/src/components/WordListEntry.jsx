import React from 'react';

const { useState, useEffect } = React;

const WordListEntry = ({item, update, deleter}) => {

  const [wordState, setWordState] = useState(`${item.word}`)
  const [defState, setDefState] = useState(`${item.definition}`)
  const [editMode, setEditMode] = useState(false);

  let editor = (e) => {
    e.preventDefault();
    setEditMode(!editMode)
  }

  let save = (e) => {
    e.preventDefault();
    item.word = wordState;
    item.definition = defState;
    update(item);
    setEditMode(!editMode)
  }

  let editWordHandler = (e) => {
    setWordState(e.target.value);
  }

  let editDefHandler = (e) => {
    setDefState(e.target.value);
  }
  // item.word = wordState;
  // item.definition = defState;

  let deleteHandler = (e) => {
    e.preventDefault();
    deleter(item._id);


  }

  return (

    <tr>
      <td>{editMode ? <input type="text" value={wordState} onChange={editWordHandler}/> : item.word}</td>
      <td>{editMode ? <input type="text" value ={defState} onChange={editDefHandler}/> : item.definition}</td>
      {/* <td>{wordState}</td>
      <td>{defState}</td> */}
      <td><form onSubmit={editMode ? save : editor}><input type="submit" value="Edit"/></form></td>
      <td><form onSubmit={deleteHandler}><input type="submit" value="Delete"/></form></td>
    </tr>

  )
}

export default WordListEntry;