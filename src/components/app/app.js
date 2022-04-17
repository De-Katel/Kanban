
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

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

  const deleteItem = (id) => {

    setTaskList((taskList) => {

      const idx = taskList.findIndex((el) => (el.id === id));

      const before = taskList.slice(0, idx);
      const after = taskList.slice(idx + 1);
      const newArray = [...before, ...after];

      return newArray;
    })
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
      <Router>
        <AppMain
          changeDescription={changeDescription}
          showDescription={showDescription}
          cardLists={sortList}
          changeStage={changeStage}
          addItem={addItem}
          deleteItem={deleteItem}
          selectDescription={selectDescription} />
      </Router>
      <AppFooter tasksSwitch={tasksSwitch()} />
    </>
  )

}

export default App;