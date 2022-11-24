import React from 'react'
import styles from "./Input.module.css";

const Input = () => {
  return (
    <div className={styles.input}>
        <form>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button type='submit'>Criar</button>
        </form>
    </div>
  )
}

export default Input