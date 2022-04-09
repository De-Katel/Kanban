import React from "react";
import './card-list-item.css'

const CardListItem = ({ name }) => {

  return (
    <div className="list-item">
      {name}
    </div>
  )
}
export default CardListItem;