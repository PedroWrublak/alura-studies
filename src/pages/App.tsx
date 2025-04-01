import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import StopWatch from '../components/StopWatch';
import { Itask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<Itask[] | []>([]);
  const [selected, setSelected] = useState<Itask>();

  function selectTask(selectedTask: Itask) {
    setSelected(selectedTask);
    setTasks(previousTask => previousTask.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List
       tasks={tasks}
       selectTask={selectTask}
       />
      <StopWatch />
    </div>
  );
}

export default App;