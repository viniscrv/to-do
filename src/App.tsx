import { useState } from 'react'
import "./global.css"
import styles from "./App.module.css"
import Header from './components/Header'

function App() {
  return (
    <>
      <Header/>
      <div className={styles.App}>
        Hello world
      </div>
    </>
  )
}

export default App
