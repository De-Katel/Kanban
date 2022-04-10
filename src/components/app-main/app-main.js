
import React, { useState } from 'react';
import ExecutionStage from '../execution-stage/execution-stage';
import DescriptionTask from '../description-task/description-task';
import './app-main.css';

const AppMain = ({
  changeDescription,
  showDescription,
  cardLists,
  changeStage,
  addItem,
  selectDescription
}) => {

  const [switchShow, setSwitchShow] = useState(false);

const qwe = ()=>setSwitchShow(!switchShow);

  return (
    <main>
      {switchShow &&
        <DescriptionTask
          changeDescription={changeDescription}
          item={showDescription} 
          setSwitchShow = {()=>setSwitchShow(!switchShow)}/>

        || !switchShow &&
        <>
        <ExecutionStage
          stage='Backlog'
          beforeStage={null}
          cardLists={cardLists}
          changeStage={null}
          addItem={addItem}
          selectDescription={selectDescription} 
          setSwitchShow = {()=>setSwitchShow(!switchShow)}
          />
       
      <ExecutionStage
        stage='Ready'
        beforeStage='Backlog'
        cardLists={cardLists}
        changeStage={changeStage}
        addItem={false}
        selectDescription={selectDescription}
        setSwitchShow = {()=>setSwitchShow(!switchShow)} />

      <ExecutionStage
        stage='In Progress'
        beforeStage='Ready'
        cardLists={cardLists}
        changeStage={changeStage}
        addItem={false}
        selectDescription={selectDescription} 
        setSwitchShow = {()=>setSwitchShow(!switchShow)}/>

      <ExecutionStage
        stage='Finished'
        beforeStage='In Progress'
        cardLists={cardLists}
        changeStage={changeStage}
        addItem={false}
        selectDescription={selectDescription} 
        setSwitchShow = {()=>setSwitchShow(!switchShow)}/>
        </>}
    </main>
  )
}

export default AppMain;