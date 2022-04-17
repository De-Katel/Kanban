import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

import CardListItem from '../card-list-item/card-list-item';
import './card-list.css';

const CardList = ({ listThisStage, selectDescription, deleteItem }) => {

  const elements = listThisStage.map((item) => {

    const { id, ...itemProps } = item;

    return (

      <li
        key={id}
      >
        <div
          className='liWrap'
        >
          {<Link
            to={`/card`}
            className='link'
            onClick={() => selectDescription(id)}
          >
            <CardListItem {...itemProps} />
          </Link>}

          <button
            onClick={(e) => deleteItem(id)}
            className="deleteTask">
            &#215;
          </button>
        </div>
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
