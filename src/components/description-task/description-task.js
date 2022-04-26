import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './description-task.css';

const DescriptionTask = ({ changeDescription, cardList }) => {

    const params = useParams();

    const item = cardList.find((item) => item.id == params.cardId);

    const [newDescription, setNewDescription] = useState(item.description);

    const onLabelChange = (e) => {

        setNewDescription(e.target.value);
    }

    const saveChanges = () => {

        changeDescription(item.id, newDescription);
    }

    return (
 
        <div className='descriptionWindow' >
            <div className='headDeskription'>
                <div className='nameDescription'>
                    {item.name}
                </div>
                <Link to='/'>
                    <button 
                        title='save and close'
                        className='close'
                        onClick={saveChanges}>
                        &#215;
                    </button>
                </Link>
            </div>
            <textarea
                placeholder='This task has no description'
                className='description'
                onChange={onLabelChange}
                value={newDescription}
            >
            </textarea>
        </div>

    )
}
export default DescriptionTask;