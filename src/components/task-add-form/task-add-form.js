import React, { useState} from 'react';
import './task-add-form.css';

const TaskAddForm = ({onClickElem,addItem}) => {

    const [label, setLabel] = useState('')

    const onSubmit = (e) => {
        if (label) {
            addItem(label)
            e.preventDefault();
            onClickElem();
        } else {
            e.preventDefault();
            onClickElem();
        }
    }

    const onLabelChange = (e) => {

        setLabel(e.target.value)
    }

    return (
        <form
            className='task-add-form'
            onSubmit={onSubmit}
        >
            <input
            onBlur={!label?onClickElem:null}
            autoFocus = {true}
                className='input'
                onChange={onLabelChange}
                value={label}
            >
            </input>
            <button
                className='submit'>
                submit
            </button>
        </form>
    )

}

export default TaskAddForm;