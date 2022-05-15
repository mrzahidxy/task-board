import './App.scss';
import { useState, useEffect } from 'react';
import Board from './components/Board/Board';
import Editable from './components/Editable/Editable';

function App() {

  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("prac-kanban")) || []
  );

  const addboardHandler = (name) => {
    const tempBoards = [...boards];
    tempBoards.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoards);
  };

  const removeBoard = (id) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
  };

  const addCardHandler = (id, title) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
    });
    setBoards(tempBoards);
  };

  const removeCard = (bid, cid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(boards));
  }, [boards]);


  return (
    <div className="app">
      <h1 className="app-navbar">
        Navbar
      </h1>
      <div className="app-outer">
        <div className="app-boards">
          {
            boards.map((item) =>
              <Board
                key={item.id}
                board={item}
                addCard={addCardHandler}
                removeCard={removeCard}
                removeBoard={() => removeBoard(item.id)} />
            )}

          <div className="app-boards-board">
            <Editable
              displayClass='app-boards-board-add'
              text='Add Board'
              placeholder='Enter Board Title'
              buttonText='Add New Board'
              onSubmit={addboardHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
