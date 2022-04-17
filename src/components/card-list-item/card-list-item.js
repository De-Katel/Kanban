import React from "react";
import './card-list-item.css'

const CardListItem = ({ name }) => {

  return (
    <div
      className="list-item">
      <span
        className="item-name"
        title="see description">
        {name}
      </span>
      
    </div>
  )
}
export default CardListItem;