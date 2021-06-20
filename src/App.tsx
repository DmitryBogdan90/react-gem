import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import DynamicInput from "./features/dynamicInput/DynamicInput";

function App() {
  console.log('render App')
  return (
      <>
        <Counter />
        <DynamicInput/>
      </>
  );
}

export default App;
