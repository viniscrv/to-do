import { useState } from 'react'
import "./global.css"
import styles from "./App.module.css"
import Header from './components/Header'
import Input from './components/Input'
import Tasks from './components/Tasks'

function App() {
  return (
    <>
      <Header/>
      <div className={styles.App}>
        <Input/>
        <Tasks/>
      </div>
    </>
  )
}

export default App
