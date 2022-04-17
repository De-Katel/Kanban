
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ExecutionStage from '../execution-stage/execution-stage';
import DescriptionTask from '../description-task/description-task';
import './app-main.css';

const AppMain = ({
  changeDescription,
  showDescription,
  cardLists,
  changeStage,
  addItem,
  selectDescription,
  deleteItem
}) => {

  return (

    <Routes>
      <Route exact path='/'
        element={
          <main>
            <ExecutionStage
              stage='Backlog'
              beforeStage={null}
              cardLists={cardLists}
              changeStage={null}
              addItem={addItem}
              deleteItem={deleteItem}
              selectDescription={selectDescription}
              setSwitchShow={() => setSwitchShow(!switchShow)}
            />

            <ExecutionStage
              stage='Ready'
              beforeStage='Backlog'
              cardLists={cardLists}
              changeStage={changeStage}
              addItem={false}
              deleteItem={deleteItem}
              selectDescription={selectDescription}
              setSwitchShow={() => setSwitchShow(!switchShow)} />

            <ExecutionStage
              stage='In Progress'
              beforeStage='Ready'
              cardLists={cardLists}
              changeStage={changeStage}
              addItem={false}
              deleteItem={deleteItem}
              selectDescription={selectDescription}
              setSwitchShow={() => setSwitchShow(!switchShow)} />

            <ExecutionStage
              stage='Finished'
              beforeStage='In Progress'
              cardLists={cardLists}
              changeStage={changeStage}
              addItem={false}
              deleteItem={deleteItem}
              selectDescription={selectDescription}
              setSwitchShow={() => setSwitchShow(!switchShow)} />
          </main>
        }> 
        </Route>

        <Route path='/card'
         element=
         {<main>
         <DescriptionTask 
          changeDescription={changeDescription}
         item = {showDescription}
         />
         </main>
         }></Route>
    </Routes>

  )
}

export default AppMain;