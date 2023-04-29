import React from 'react';

const { useState, useEffect } = React;

const FormTwo = ({setCurrentForm, userInfo, setUserInfo}) => {

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [terr, setTerr] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');

  const addressOneChanger = (e) => {
    setAddress1(e.target.value);
  }

  const addressTwoChanger = (e) => {
    setAddress2(e.target.value);
  }

  const cityChanger = (e) => {
    setCity(e.target.value);
  }

  const terrChanger = (e) => {
    setTerr(e.target.value);
  }

  const zipChanger = (e) => {
    setZip(e.target.value);
  }

  const phoneChanger = (e) => {
    setPhone(e.target.value);
  }

  const locationSubmitter = (e) => {
    e.preventDefault(e);
    setUserInfo({...userInfo, address1: address1, address2: address2, city: city, state: terr, zipCode: zip, phone: phone})
    setAddress1('')
    setAddress2('')
    setCity('')
    setTerr('')
    setZip('')
    setPhone('')
    setCurrentForm(3);
  }

  return (

    <form onSubmit={locationSubmitter}>
      <input type="submit" value="Next"/>
      <input type="text" placeholder="Address 1" onChange={addressOneChanger}/>
      <input type="text" placeholder="Address 2"onChange={addressTwoChanger}/>
      <input type="text" placeholder="City" onChange={cityChanger}/>
      <input type="text" placeholder="State"onChange={terrChanger}/>
      <input type="text" placeholder="Zip Code" onChange={zipChanger}/>
      <input type="text" placeholder="Phone Number"onChange={phoneChanger}/>

    </form>

  )
}

export default FormTwo;