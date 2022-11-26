import { Trash } from "phosphor-react";
import React, { useState } from "react";
import styles from "./Task.module.css";


interface taskProps {
  content: string;
  onDelete: (taskToDelete: string) => void;
}

const Task = ({content, onDelete}: taskProps) => {

  function handleDelete() {
    onDelete(content);
  }

  return (
    <div className={styles.task}>
      <div>
        <div className={styles.checkbox}>
          <label>
            {content}
            <input type="checkbox" id="task" />
          </label>
        </div>
      </div>
      <button onClick={handleDelete}>
        <Trash size={26} />
      </button>
    </div>
  );
};

export default Task;
