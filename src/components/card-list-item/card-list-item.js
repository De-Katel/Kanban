import React from "react";
import './card-list-item.css'

const CardListItem = ({ name }) => {

  return (

    <div
      className="item-name"
      title="see description">
      {name}
    </div>
  )
}
export default CardListItem;