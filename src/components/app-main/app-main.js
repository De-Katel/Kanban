import React from 'react';
import ExecutionStage from '../execution-stage/execution-stage';
import './app-main.css';
 
const AppMain = ({ cardLists, changeStage, addItem }) => {
  return (
    <main>
      <ExecutionStage
        stage='Backlog'
        beforeStage={null}
        cardLists={cardLists}
        changeStage={null}
        addItem={addItem} />

      <ExecutionStage
        stage='Ready'
        beforeStage='Backlog'
        cardLists={cardLists}
        changeStage={changeStage}
        addItem={false} />

      <ExecutionStage
        stage='In Progress'
        beforeStage='Ready'
        cardLists={cardLists}
        changeStage={changeStage}
        addItem={false} />
 
      <ExecutionStage
        stage='Finished'
        beforeStage='In Progress'
        cardLists={cardLists}
        changeStage={changeStage}
        addItem={false} />
    </main>
  )
}

export default AppMain;