import React from 'react';

const { useState, useEffect } = React;

const FormThree = ({setCurrentForm, userInfo, setUserInfo}) => {

  const [cc, setCC] = useState('');
  const [cVV, setCVV] = useState('');
  const [exp, setExp] = useState('');
  const [bZip, setBZip] = useState('');

  const ccChanger = (e) => {
    setCC(e.target.value);
  }

  const cVVChanger = (e) => {
    setCVV(e.target.value);
  }

  const expChanger = (e) => {
    setExp(e.target.value);
  }

  const bZipChanger = (e) => {
    setBZip(e.target.value);
  }

  const paySubmitter = (e) => {
    e.preventDefault();
    setUserInfo({...userInfo, credit_card: cc, cvv: cVV, expiration: exp, bzip: bZip})
    setCC('')
    setCVV('')
    setExp('')
    setBZip('')
    setCurrentForm(4);
  }

  return (

    <form onSubmit={paySubmitter}>
      <input type="submit" value="Next"/>
      <input type="text" placeholder="Credit Card :D" onChange={ccChanger}/>
      <input type="text" placeholder="CVV" onChange={cVVChanger}/>
      <input type="text" placeholder="Expiration Date MM/YY" onChange={expChanger}/>
      <input type="text" placeholder="Billing Zip" onChange={bZipChanger}/>
    </form>

  )
}

export default FormThree;