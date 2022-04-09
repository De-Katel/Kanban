
import React, { useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';
import AppMain from '../app-main/app-main';

const App = () => {

  const [taskList, setTaskList] = useState(()=>JSON.parse(sessionStorage.getItem('taskList'))||[]);
  const [nextId, setNextId] = useState(88);

  useEffect(() => {
    
    sessionStorage.setItem('taskList', JSON.stringify(taskList));
    console.log(JSON.parse(sessionStorage.getItem('taskList'))||[]);
    console.log(JSON.parse(sessionStorage.getItem('taskList')));
  }, [taskList]);

  const tasksSwitch = () => {

    let activeTask = 0;
    let finishedTask = 0;

    taskList.forEach((item) => {

      if (item.stage === 'Backlog') {
        activeTask++
      } else if (item.stage === 'Finished') {
        finishedTask++
      }
    });

    return {
      active: activeTask,
      finished: finishedTask
    }
  }

  const addItem = (text) => {
    let newItem = {
      name: text,
      id: nextId,
      stage: 'Backlog',
      date: new Date()
    };

    setNextId(nextId + 1);
    setTaskList([...taskList, newItem]);
  }

  const setStage = (stage) => {

    switch (stage) {
      case 'Backlog':
        return 'Ready';

      case 'Ready':
        return 'In Progress';

      case 'In Progress':
        return 'Finished';

      default:
        return 'Backlog';
    }

  }

  const changeStage = (id) => {

    setTaskList(
      taskList.map((item) => {

        if (item.id == id) {

          item.stage = setStage(item.stage);
          item.date = new Date();
        }
        return item;
      })
    )
  }

  const sortList = taskList !== [] ? taskList.slice().sort((a, b) => a.date.getTime() > b.date.getTime() ? 1 : -1) : [];

  return (
    <>
      <AppHeader />
      <AppMain cardLists={sortList} changeStage={changeStage} addItem={addItem} />
      <AppFooter tasksSwitch={tasksSwitch()} />
    </>
  )

}

export default App;