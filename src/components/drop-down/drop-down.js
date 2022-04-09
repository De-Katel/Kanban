import React from "react";
import './drop-down.css'

const DropDown = ({ dropDownList, onClickElem }) => {

    const elements = dropDownList.map((item) => {

        const { id, name } = item;

        return (

            <option key={id} value={id} >
                {name}
            </option>
        );
    });

    return (
        <div className="drop-down-wrap">
            <select className="drop-down" onChange={(e) => onClickElem(e.target.value)}>
                <option></option>
                {elements}
            </select>
        </div>
    )

}

export default DropDown;