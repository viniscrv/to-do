import React from 'react'
import styles from "./Tasks.module.css"
import Task from './Task'

const Tasks = () => {
  return (
    <>
        <div className={styles.informacoes}>
            <div className={styles.informacoes__criadas}>Tarefas criadas<span>0</span></div>
            <div className={styles.informacoes__concluidas}>Concluídas<span>2 de 5</span></div>
        </div>

        <div>
            <Task/>
            <Task/>
            <Task/>
        </div>
    </>
  )
}

export default Tasks