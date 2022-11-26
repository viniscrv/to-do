import React, { useState } from "react";
import styles from "./Input.module.css";
import Tasks from "./Tasks";

interface taskListProps {
  taskList: {
    task: string;
    isComplete: boolean;
  }[];
}

const Input = ({ taskList }: taskListProps) => {
  const [newTaskList, setNewTaskList] = useState(taskList);
  const [taskText, setTaskText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNewTaskList([...newTaskList, { task: taskText, isComplete: false }]);
    setTaskText("");
  }

  function handleTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskText(e.target.value);
  }

  return (
    <div className={styles.input}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleTaskChange}
          value={taskText}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">Criar</button>
      </form>

      <Tasks taskList={newTaskList} />
    </div>
  );
};

export default Input;
