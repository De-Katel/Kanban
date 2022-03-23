import React from 'react';
import ExecutionStage from '../execution-stage/execution-stage';
import './app-main.css';

const AppMain = ({ cardLists }) => {
  const { backLogList, readyList, progressList, finishedList } = cardLists;
  return (
    <main>
      <ExecutionStage
        listThisStage={backLogList}
        dropDownList={[]}
        nameStage='Backlog' 
        addItem = {true}/>
      <ExecutionStage
        listThisStage={readyList}
        dropDownList={backLogList}
        nameStage='Ready' 
        addItem = {false}/>
      <ExecutionStage
        listThisStage={progressList}
        dropDownList={readyList}
        nameStage='In Progress' 
        addItem = {false}/>
      <ExecutionStage
        listThisStage={finishedList}
        dropDownList={progressList}
        nameStage='Finished' 
        addItem = {false}/>
    </main>
  )
}

export default AppMain;