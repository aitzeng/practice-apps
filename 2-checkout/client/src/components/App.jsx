import React from 'react';
import FormList from './FormList.jsx';

const { useState, useEffect } = React;

const App = () => {

  const [currentForm, setCurrentForm] = useState(0)
  // const [check, setCheck] = useState(false)


  const beginCheckOut = (e) => {
    e.preventDefault();
    // setCheck(!check);
    setCurrentForm(currentForm + 1)
  }

  if (currentForm === 0) {
    return (

      <div>
      <form onSubmit={beginCheckOut}>
        {currentForm === 0 ? <input type="submit" value="Checkout" disabled={false}/> : <input type="submit" value="Checkout" disabled={true}/>}
      </form>
      <FormList currentForm = {currentForm} setCurrentForm={setCurrentForm}/>
    </div>

    )
  } else {
    return (

    <div>
      <FormList currentForm = {currentForm} setCurrentForm={setCurrentForm}/>
    </div>
    )
  }
}

export default App;