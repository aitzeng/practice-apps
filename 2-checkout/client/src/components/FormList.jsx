import React from 'react';
import FormOne from './FormOne.jsx';

const { useState, useEffect } = React;

const FormList = ({currentForm}) => {

  const [userInfo, setUserInfo] = useState({});

  const addInfo = (info) => {
    setUserInfo({...userInfo, ...info})
  }

  if (currentForm === 0) {
    return (
    <div>Welcome</div>
    )
  }

  if (currentForm === 1) {
    return (
      <div>
        <FormOne addInfo={addInfo}/>
      </div>
    )
  }
}

export default FormList;