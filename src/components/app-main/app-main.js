import { Route, Routes } from 'react-router-dom';
import ExecutionStage from '../execution-stage/execution-stage';
import DescriptionTask from '../description-task/description-task';
import './app-main.css';

const AppMain = ({

  changeDescription,
  cardList,
  changeStage,
  addItem,
  deleteItem
}) => {

  return (

    <Routes>
      <Route exact path='/'
        element={
          <main>
            <ExecutionStage
              stage='Backlog'
              beforeStage={null}
              cardList={cardList}
              changeStage={null}
              addItem={addItem}
              deleteItem={deleteItem}
            />

            <ExecutionStage
              stage='Ready'
              beforeStage='Backlog'
              cardList={cardList}
              changeStage={changeStage}
              addItem={false}
              deleteItem={deleteItem}
            />

            <ExecutionStage
              stage='In Progress'
              beforeStage='Ready'
              cardList={cardList}
              changeStage={changeStage}
              addItem={false}
              deleteItem={deleteItem}
            />

            <ExecutionStage
              stage='Finished'
              beforeStage='In Progress'
              cardList={cardList}
              changeStage={changeStage}
              addItem={false}
              deleteItem={deleteItem}
            />
          </main>
        }>
      </Route>

      <Route path='/card'
        element=
        {<main>
          <DescriptionTask
            changeDescription={changeDescription}
            cardList={cardList}
          />
        </main>
        }>
        <Route path=":cardId" element={<DescriptionTask
          changeDescription={changeDescription}
          cardList={cardList}
        />} >
        </Route>
      </Route>
    </Routes>

  )
}

export default AppMain;