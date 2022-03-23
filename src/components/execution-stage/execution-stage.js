import React from 'react';
import CardList from '../card-list/card-list';
import DropDown from '../drop-down/drop-down';
import AddButon from '../add-card/add-card';
import TaskAddForm from '../task-add-form/task-add-form'
import './execution-stage.css'


class ExecutionStage extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { showButon: true };

    this.onClickElem = () => {
      this.setState(({ showButon }) => {
        return {
          showButon: !showButon
        };
      })
    }
  }

  render() {
    const { showButon } = this.state;
    const addItem = this.props.addItem;

    return (
      <div className='stage' >
        <h2>{this.props.nameStage}</h2>
        <CardList listThisStage={this.props.listThisStage} />
        {showButon && addItem && <AddButon onClickElem={this.onClickElem} /> ||
          !showButon && addItem && <TaskAddForm onClickElem={this.onClickElem} /> ||
          showButon && !addItem && <AddButon onClickElem={this.onClickElem} /> ||
          !showButon && !addItem && <DropDown onClickElem={this.onClickElem} dropDownList={this.props.dropDownList} />}
      </div >
    )
  }

}

export default ExecutionStage;