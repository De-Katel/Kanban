import React from 'react';
import { Link } from 'react-router-dom';

import './card-list.css';

const CardList = ({ listThisStage, deleteItem }) => {

  const elements = listThisStage.map((item) => {

    const { id, name } = item;

    return (

      <li key={id}>
        <div className='liWrap'>
          {<Link
            to={`/card/${id}`}
            className='link'
          >
            {name}
          </Link>}

          <button
            onClick={() => deleteItem(id)}
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
