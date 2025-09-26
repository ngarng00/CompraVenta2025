import React from 'react';
import logo from './logo.svg';
import './App.css';


const name = 'Nicolas';
const element = <h2>Hola, {name}</h2>;

const formatName = (user: any) => {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Nicolas',
  lastName: 'Garnica'
}

const elementAHref = <a href="https://react.dev/"> Introducion Reactt </a>

function App() {
  return (
    <>  
    </>
  );
}

export default App;
