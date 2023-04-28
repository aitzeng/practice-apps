import React from 'react';

const { useState, useEffect } = React;

const Search = ({filtering}) => {

  const [searching, setSearching] = useState('');
  // const [edit, setEdit] = useState(false)

  let changeHandler = (e) => {
    setSearching(e.target.value);
    // filtering(e.target.value) // Filter while typing
  }

  let submitHandler = (e) => {
    e.preventDefault();
    filtering(searching)
    // setEdit(!edit) Change Filter to Reset
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Search" onChange={changeHandler} value={searching}/>
      <input type="submit" value="Filter"/>
      {/* {edit ? <input type="submit" value ="Reset"/> : <input type="submit" value="Filter"/>} Reset it. But have issue with clicking multiple */}
    </form>

  )
}

export default Search;