import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

function App() {
  const[state,setState]=useState(6);

  const myfun=(e)=>{
    console.log('function');
    setState(e);
  }

  return (
    <>
    <Home data={'data'} state={state} fun={myfun}/> 
    </>
  )
}

export default App
