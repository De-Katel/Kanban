import React from "react";
import './drop-down.css'

const DropDown = ({ dropDownList, onClickElem, onBlur }) => {

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
            <select className="drop-down"
                autoFocus={true}
                onBlur={onBlur}
                onChange={(e) => onClickElem(e.target.value)}>
                <option></option>
                {elements}
            </select>
        </div>
    )

}

export default DropDown;