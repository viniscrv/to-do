import { Trash } from 'phosphor-react'
import React from 'react'
import styles from "./Task.module.css"

const Task = () => {
  return (
    <div className={styles.task}>
        <div>
            <div className={styles.checkbox}>
                <input type="checkbox" id="task"/>
                <label htmlFor="task">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</label>
            </div>
        </div>
        <button>
            <Trash size={32} />
        </button>
    </div>
  )
}

export default Task