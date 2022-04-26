import React from 'react';
import './app-footer.css';

const AppFooter = ({tasksSwitch}) => {

    return (
      <footer> 
        <div className='tasks-switch'>
          <span>Active tasks:  {tasksSwitch.active}</span>
          <span className='finished'>Finished tasks:  {tasksSwitch.finished}</span>
        </div>
        
        <div>Kanban board by DeKatel, 2022</div>
      </footer>
    )
  }
  export default AppFooter;