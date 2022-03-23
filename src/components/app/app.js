import React from 'react';
import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';
import AppMain from '../app-main/app-main';

export default class App extends React.Component{

  state = {
    backLogList : [
      { label: 'eat Borscht', id: 1},
      { label: 'sleep', id: 2 }
    ],
    readyList :[
      { label: 'Ready eat Borscht', id: 13 },
      { label: 'Ready sleep', id: 4 }
    ],
    progressList : [
      { label: 'progress eat Borscht', id: 5 },
      { label: 'progress sleep', id: 6 }
    ],
    finishedList : [
      { label: 'Finished eat Borscht', id: 7  },
      { label: 'Finished sleep', id: 8  }
    ]
  } 

render(){
  return (
    <>
      <AppHeader />
      <AppMain cardLists={this.state} />
      <AppFooter />
    </>
  )};
}

