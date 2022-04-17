import React, { useState } from 'react';
import CardList from '../card-list/card-list';
import DropDown from '../drop-down/drop-down';
import AddButon from '../add-card/add-card';
import TaskAddForm from '../task-add-form/task-add-form'
import './execution-stage.css'


const ExecutionStage = ({
  stage,
  beforeStage,
  cardList,
  addItem,
  changeStage,
  deleteItem
}) => {

  const [showButon, setShowButton] = useState(true);

  const handleDropClick = (id) => {

    changeStage(id);
    setShowButton(!showButon);
  }

  const handleButtonClick = () => setShowButton(!showButon);

  const listThisStage = cardList.filter(item => item.stage === stage);
  const dropDownList = cardList.filter(item => item.stage === beforeStage);

  const disabled = !addItem && !dropDownList.length ? true : false;

  return (

    <div className='stage' >
      <h2>{stage}</h2>
      <CardList
        listThisStage={listThisStage}
        deleteItem={deleteItem} />
      {showButon && addItem && <AddButon clickElem={handleButtonClick} disabled={false} /> ||
        !showButon && addItem && <TaskAddForm clickElem={handleButtonClick} addItem={addItem} /> ||
        showButon && !addItem && <AddButon clickElem={handleButtonClick} disabled={disabled} /> ||
        !showButon && !addItem && <DropDown clickElem={handleDropClick} onBlur={handleButtonClick} dropDownList={dropDownList} />}
    </div >
  )
}

export default ExecutionStage;