import { Trash } from "phosphor-react";
import React from "react";
import styles from "./Task.module.css";

interface taskProps {
  task: string;
}

const Task = ({ task }: taskProps) => {
  return (
    <div className={styles.task}>
      <div>
        <div className={styles.checkbox}>
          <label>
            {task}
            <input type="checkbox" id="task" />
          </label>
        </div>
      </div>
      <button>
        <Trash size={26} />
      </button>
    </div>
  );
};

export default Task;
