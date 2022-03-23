import React from "react";
import './add-card.css';


const AddButon = ({onClickElem})=>{
    return(
        <button onClick={onClickElem} className="add-button">
            + Add card
        </button>
    )
}

export default AddButon;