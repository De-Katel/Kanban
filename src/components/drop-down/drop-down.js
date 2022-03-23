import React from "react";
import './drop-down.css'

const DropDown = ({ dropDownList, onClickElem }) => {

    const elements = dropDownList.map((item) => {

        const { id, label } = item;

        return (
            <option key={id} className='option'>
                {label}
            </option>
        );
    });

    if (dropDownList.length > 0) {

        return (

            <select onClick={onClickElem} className="drop-down">
                {elements}
            </select>
        )

    } else { return null }
}

export default DropDown;