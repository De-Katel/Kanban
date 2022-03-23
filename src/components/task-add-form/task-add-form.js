import React from 'react';

const TaskAddForm = ({onClickElem}) => {
    return (
        <div className='task-add-form'>
            <input></input>
            <button onClick={onClickElem}>submit</button>
        </div>
    )
}

export default TaskAddForm;