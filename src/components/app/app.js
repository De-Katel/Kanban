
import React, { useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';
import AppMain from '../app-main/app-main';

const App = () => {
  // localStorage.clear();
  const [taskList, setTaskList] = useState(() => JSON.parse(localStorage.getItem('taskList')) || []);
  const [nextId, setNextId] = useState(() => JSON.parse(localStorage.getItem('nextId')) || 88);
  const [showDescription, setShowDescription] = useState({});

  useEffect(() => {

    localStorage.setItem('taskList', JSON.stringify(taskList));
    localStorage.setItem('nextId', JSON.stringify(nextId));
  }, [taskList, nextId, showDescription]);

  const addItem = (text) => {
    let newItem = {
      name: text,
      description: '',
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
console.log(id);
    setTaskList(
      taskList.map((item) => {

        if (item.id == id) {

          item.stage = setStage(item.stage);
          item.date = new Date();
          console.log(item.id,id)
        }
        return item;
      })
    )
  }

  const selectDescription = (id) => {
    setShowDescription(taskList.find((item) => item.id === id));
  }

  const changeDescription = (id, newDescription) => {

    setTaskList(
      
      taskList.map((item) => {
        
        if (item.id === id) {

          item.description = newDescription;
        }
        return item;
      })
    )
  }

  const sortList = taskList !== [] ?
    taskList.slice().sort((a, b) =>
      new Date(a.date).getTime() > new Date(b.date).getTime()
        ? 1
        : -1)
    : [];

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

  return (
    <>
      <AppHeader />
      <AppMain
        changeDescription={changeDescription}
        showDescription={showDescription}
        cardLists={sortList}
        changeStage={changeStage}
        addItem={addItem}
        selectDescription={selectDescription} />
      <AppFooter tasksSwitch={tasksSwitch()} />
    </>
  )

}

export default App;