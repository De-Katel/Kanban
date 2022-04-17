import React from "react";
import './add-card.css';


const AddButon = ({ clickElem, disabled }) => {

    return (
        <button
            className={!disabled ? 'add-button' : 'disabled'}
            onClick={clickElem}
            disabled={disabled}>
            + Add card
        </button>
    )
}

export default AddButon;