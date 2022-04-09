import React from 'react';
import './task-add-form.css';

class TaskAddForm extends React.Component {

    state = {
        label: ''
    }


    onSubmit = (e) => {
        if (this.state.label) {
            this.props.addItem(this.state.label)
            e.preventDefault();
            this.props.onClickElem();
        } else {
            e.preventDefault();
            this.props.onClickElem();
        }
    }

    onLabelChange = (e) => {

        this.setState({
            label: e.target.value
        })
    }

    render() {
        return (
            <form
                className='task-add-form'
                onSubmit={this.onSubmit}

            >
                <input
                    className='input'
                    onChange={this.onLabelChange}
                    value={this.state.label}
                >
                </input>
                <button
                    className='submit'>
                    submit
                </button>
            </form>)
    }
}

export default TaskAddForm;