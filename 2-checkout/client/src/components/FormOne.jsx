import React from 'react';

const { useState, useEffect } = React;

const FormOne = ({addInfo}) => {

  const [typeName, setTypeName] = useState('');
  const [elecMail, setElecMail] = useState('');
  const [pass, setPassword] = useState('');

  const nameChanger = (e) => {
    setTypeName(e.target.value)
  }

  const emailChanger = (e) => {
    setElecMail(e.target.value)
  }

  const passChanger = (e) => {
    setPassword(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    addInfo({name: typeName, email: elecMail, password: pass})
    setTypeName('');
    setElecMail('');
    setPassword('');

  }

  return (

    <form>
      <input type="text" value={typeName} onChange={nameChanger} placeholder="name"/>
      <input type="text" value={elecMail} onChange={emailChanger} placeholder="email"/>
      <input type="text" value={pass} onChange={passChanger} placeholder="passowrd"/>
    </form>

  )
}

export default FormOne;