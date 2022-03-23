import React from "react";
import './card-list-item.css'

const CardListItem = ({ label }) => {

  return (
    <div className="list-item">
      {label}
    </div>
  )
}
export default CardListItem;