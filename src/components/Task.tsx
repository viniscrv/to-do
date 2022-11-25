import { Trash } from 'phosphor-react'
import React from 'react'
import styles from "./Task.module.css"

const Task = () => {
  return (
    <div className={styles.task}>
        <div>
            <div className={styles.checkbox}>
                
                <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  <input type="checkbox" id="task" />
                </label>
            </div>
        </div>
        <button>
            <Trash size={26} />
        </button>
    </div>
  )
}

export default Task