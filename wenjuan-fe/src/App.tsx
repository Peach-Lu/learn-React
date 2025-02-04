import { useState } from 'react'
import './App.css'
import List from './pages/List'

function App() {

  return (
    <>
      <div className='App'>
        <h1 className='bg-blue-500 h-10 mb-10'>问卷fe</h1>
        <List />
      </div>
    </>
  )
}

export default App
