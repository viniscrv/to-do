import React, { ReactElement, useState } from "react";
import styles from "./Tasks.module.css";
import Task from "./Task";

interface taskListProps {
  taskList: {
    task: string;
    isComplete: boolean;
  }[];
}

const Tasks = ({ taskList }: taskListProps) => {

  const [newTaskList, setNewTaskList] = useState(taskList);

  const [taskText, setTaskText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewTaskList([...newTaskList, {task: taskText, isComplete: false}]);

    setTaskText("");
  }

  function changeTaskText(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskText(e.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleted = newTaskList.filter((task) => {
      return task.task !== taskToDelete;
    });

    setNewTaskList(tasksWithoutDeleted);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
          onChange={changeTaskText}
          value={taskText}
        />
        <button type="submit">Criar</button>
      </form>

      <div className={styles.informacoes}>
        <div className={styles.informacoes__criadas}>
          Tarefas criadas<span>0</span>
        </div>
        <div className={styles.informacoes__concluidas}>
          Concluídas<span>2 de 5</span>
        </div>
      </div>

      <div>
        {newTaskList.map((task) => {
          return <Task key={task.task} content={task.task} onDelete={deleteTask}/>
        })}
      </div>
    </>
  );
};

export default Tasks;
