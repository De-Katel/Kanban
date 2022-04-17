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

  const dropClick = (id) => {

    changeStage(id);
    setShowButton(!showButon);
  }

  const listThisStage = cardList.filter(item => item.stage === stage);
  const dropDownList = cardList.filter(item => item.stage === beforeStage);

  const buttonClick = () => setShowButton(!showButon);

  let disabled = !addItem && !dropDownList.length ? true : false;

  return (

    <div className='stage' >
      <h2>{stage}</h2>
      <CardList
        listThisStage={listThisStage}
        deleteItem = {deleteItem} />
      {showButon && addItem && <AddButon onClickElem={buttonClick} disabled={false} /> ||
        !showButon && addItem && <TaskAddForm onClickElem={buttonClick} addItem={addItem} /> ||
        showButon && !addItem && <AddButon onClickElem={buttonClick} disabled={disabled} /> ||
        !showButon && !addItem && <DropDown onClickElem={dropClick} onBlur={buttonClick}  dropDownList={dropDownList} />}
    </div >
  )
}

export default ExecutionStage;