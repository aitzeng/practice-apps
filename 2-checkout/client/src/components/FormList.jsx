import React from 'react';
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';
import FormFour from './FormFour.jsx';

const { useState, useEffect } = React;

const FormList = ({currentForm, setCurrentForm}) => {

  const [userInfo, setUserInfo] = useState({});

  console.log(userInfo);

  // const formSubmitter = (e, dataToAdd) => {
  //   e.preventDefault();
  //   if (currentForm === 4) { //Axios POST Request
  //     setCurrentForm(0)
  //   } else if (currentForm === 0) {
  //     setCurrentForm(currentForm + 1)
  //   } else {
  //     // setUserInfo({...userInfo, ...dataToAdd})
  //     setCurrentForm(currentForm + 1)
  //   }
  // }

  if (currentForm === 0) {
    return (
    <div>Welcome</div>
    )
  }

  if (currentForm === 1) {
    return (
      <div>
        <FormOne setCurrentForm={setCurrentForm} userInfo={userInfo} setUserInfo={setUserInfo}/>
      </div>
    )
  }

  if (currentForm === 2) {

    return (

      <div>
        <FormTwo setCurrentForm={setCurrentForm} userInfo={userInfo} setUserInfo={setUserInfo}/>
      </div>

    )
  }

  if (currentForm === 3) {

    return (

      <div>
        <FormThree setCurrentForm={setCurrentForm} userInfo={userInfo} setUserInfo={setUserInfo}/>
      </div>
    )
  }

  if (currentForm === 4) {

    return (

      <div>
        <FormFour userInfo={userInfo} setUserInfo={setUserInfo} setCurrentForm={setCurrentForm}/>
      </div>
    )
  }
}

export default FormList;