import React, { useState } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import './app-header.css';
import avatar from './image/avatar.svg'
import rowDown from './image/row_down.svg'
import rowUp from './image/row_up.svg'

const AppHeader = () => {

  const [showProfile, setShowProfile] = useState(false);

  const profile = (
    <Popover
      className='profile'>
      <Popover.Body>
        <div
          className='profile-item'
          onClick={() => setShowProfile(!showProfile)}
        >Profile</div>
      </Popover.Body>
      <Popover.Body>
        <div
          className='profile-item'
          onClick={() => setShowProfile(!showProfile)}
        >Log Out</div>
      </Popover.Body>
    </Popover>
  )

  return (
    <header>
      <div className='app-name' >Awesome Kanban Board</div>
      <OverlayTrigger
        show={showProfile}
        trigger="click"
        placement='bottom'
        overlay={profile} >
        <div
          className='log-in'
          onClick={() => setShowProfile(!showProfile)}>
          <div className='avatar-wrap'>
            <img className='avatar' src={avatar} alt='avatar' />
          </div>
          <div>
            <img className='row' src={showProfile ? rowUp : rowDown} />
          </div>
        </div>
      </OverlayTrigger>
    </header>
  )
}

export default AppHeader;