import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

const FormFour = ({userInfo, setCurrentForm, setUserInfo}) => {

  let server = '/checkout'

  const addUser = (server, info) => {
    axios.post(server, info)
    .then((response) => {
      console.log('This is response:', response.data);
    })
    .catch((error) => {
      console.log('This is error object:', error)
    })
  }

  const purchaseSubmitter = (e) => {
    e.preventDefault();
    addUser(server, userInfo)
    setUserInfo({});
    setCurrentForm(0);
  }


  return (

    <div>Summary
      <div>User Info
        <div>Name: {userInfo.name}</div>
        <div>Email: {userInfo.email}</div>
        <div>Password: {userInfo.password}</div>
      </div>
      <div>Location
        <div>Address 1: {userInfo.address1}</div>
        <div>Address 2: {userInfo.address2}</div>
        <div>City: {userInfo.city}</div>
        <div>State: {userInfo.state}</div>
        <div>Zip Code: {userInfo.zipCode}</div>
        <div>Phone Number: {userInfo.phone}</div>
      </div>
      <div>Payment Information
        <div>Credit Card: {userInfo.credit_card}</div>
        <div>CVV: {userInfo.cvv}</div>
        <div>Expiration: {userInfo.expiration}</div>
        <div>Billing Zip Code:  {userInfo.bzip}</div>
      </div>
      <form onSubmit={purchaseSubmitter}>
        <input type="submit" value="Purchase"/>
      </form>
    </div>

  )
}

export default FormFour;