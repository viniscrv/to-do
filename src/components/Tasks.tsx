import React from "react";
import styles from "./Tasks.module.css";
import Task from "./Task";

interface taskListProps {
  taskList: {
    task: string;
    isComplete: boolean;
  }[];
}

const Tasks = ({ taskList }: taskListProps) => {
  return (
    <>
      <div className={styles.informacoes}>
        <div className={styles.informacoes__criadas}>
          Tarefas criadas<span>0</span>
        </div>
        <div className={styles.informacoes__concluidas}>
          Concluídas<span>2 de 5</span>
        </div>
      </div>

      <div>
        {taskList.map((task) => {
          return <Task key={task.task} task={task.task} />;
        })}
      </div>
    </>
  );
};

export default Tasks;
