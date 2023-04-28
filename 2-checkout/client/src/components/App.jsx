import React from 'react';
import FormList from './FormList.jsx';

const { useState, useEffect } = React;

const App = () => {

  const [currentForm, setCurrentForm] = useState(0)

  const formSubmitter = (e) => {
    e.preventDefault();
    if (currentForm === 4) {
      setCurrentForm(0)
    } else {
      setCurrentForm(currentForm + 1)
    }
  }

  let submitValue;
  if (currentForm === 0) {
    submitValue = "Checkout";
  } else if (currentForm === 4) {
    submitValue = "Purchase";
  } else {
    submitValue = "Next";
  }

  return (


    <div>
      <form onSubmit={formSubmitter}>
        <input type="submit" value={submitValue}/>
      </form>
      <FormList currentForm = {currentForm}/>
    </div>

  )
}

export default App;