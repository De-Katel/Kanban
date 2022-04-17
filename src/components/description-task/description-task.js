import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from 'react-router-dom';
import './description-task.css';

const DescriptionTask = ({ changeDescription, item }) => {

    const [newDescription, setNewDescription] = useState(item.description);

    const onLabelChange = (e) => {

        setNewDescription(e.target.value);
    }

    const saveChanges = () => {
        changeDescription(item.id, newDescription);
        setNewDescription(item.description);
    }

    return (
        <>
            <Routes>
                <Route path={`/card/${item.id}`}
                    element={
                        <div className='descriptionWindow' >

                            <div className='headDeskription'>
                                <div>
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
                    }>
                </Route>
            </Routes>

        </>
    )
}
export default DescriptionTask;