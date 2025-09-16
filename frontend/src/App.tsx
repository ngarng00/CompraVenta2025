import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HolaMundo } from './componentes/HolaMundo';
import { ComponenteFuncional } from './componentes/ComponenteFuncional';
import { ComponenteClase } from './componentes/ComponenteClase';
import { ComponenteClase2} from './componentes/ComponenteClase2';
import { ComponenteFuncional2 } from './componentes/ComponenteFuncional2';

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
  
    /*<div className="App">
      <h1>Hola Mundo</h1>
      {name}
      {element}

      <h1>Hola {formatName(user)}</h1>
      {elementAHref}
    </div>

    
      <div className="Component">
        <>
          <HolaMundo />
        </>
      </div>

      <div className="ComponentFuncional">
        <>
          <ComponenteFuncional name={"Pepito"}/>
        </>
      </div>

      <div className="ComponentClase">
        <>
          <ComponenteClase name ={"Juanito"}/>
        </>
      </div>    

      <div className="ComponenteClase2">
        <>
          <ComponenteClase2 name ={"Diablito"}/>
        </>  
      </div>*/
    <>
      <div className="ComponenteFuncional2">
        <>
          <ComponenteFuncional2 name ={"Ladroncito"}/>
        </>
      </div>   
    </>
  );
}

export default App;
