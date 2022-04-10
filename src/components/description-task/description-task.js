import React, { useState } from 'react';
import './description-task.css';

const DescriptionTask = ({ changeDescription, item, setSwitchShow }) => {

    const [newDescription, setNewDescription] = useState(item.description);

    const onLabelChange = (e) => {

        setNewDescription(e.target.value);
    }

    const saveChanges = () => {
        changeDescription(item.id, newDescription);
        setNewDescription(item.description);
        setSwitchShow();
    }



    return (
        <div className='descriptionWindow' >

            <div className='headDeskription'>
                <div>
                    {item.name}
                </div>
                <button
                className='close'
                    onClick={saveChanges}>
                &#215;
                </button>
            </div>
            <textarea
                className='description'
                onChange={onLabelChange}
                value={newDescription}
            >
            </textarea>
        </div>
    )
}
export default DescriptionTask;