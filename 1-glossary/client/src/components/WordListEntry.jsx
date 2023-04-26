import React from 'react';

const { useState, useEffect } = React;

const WordListEntry = ({item}) => {

  const [wordState, setWordState] = useState(`${item.word}`)
  const [defState, setDefState] = useState(`${item.definition}`)

  return (

    <tr>
      <td>{wordState}</td>
      <td>{defState}</td>
      <td><form><input type="submit" value="Edit"/></form></td>
      <td><form><input type="submit" value="Delete"/></form></td>
    </tr>

  )
}

export default WordListEntry;