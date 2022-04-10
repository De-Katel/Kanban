import React from 'react';
import CardListItem from '../card-list-item/card-list-item';
import './card-list.css';

const CardList = ({ listThisStage, selectDescription, setSwitchShow }) => {

  const qwe = (id) => {
    setSwitchShow();
    selectDescription(id);
  }

  const elements = listThisStage.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li
        key={id}
        onClick={() => qwe(id)}>
        {<CardListItem {...itemProps} />}
      </li>
    );
  });

  return (
    <ul className='card-list'>
      {elements}
    </ul>
  )
}

export default CardList;
