import React from "react";
import './add-card.css';


const AddButon = ({ onClickElem, disabled }) => {

    
    return (
        <button
            className={!disabled ? 'add-button' : 'disabled'}
            onClick={onClickElem}
            disabled={disabled}>
            + Add card
        </button>
    )
}

export default AddButon;