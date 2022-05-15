import { Trash } from 'react-feather';
import Card from '../Card/Card';
import Editable from '../Editable/Editable';
import './board.scss';

const Board = ( props ) => {


    return (
        <div className='board'>
            <div className="board-top">
                <p className="board-top-title">
                    {props.board.title} 
                    <span style={{marginLeft: '5px'}}>{props.board?.cards?.length || 0}</span>
                </p>
                <div className="board-top-more">
                    <div>
                        <Trash onClick={() => props.removeBoard()} />
                    </div>
                </div>
            </div>

            <div className="board-cards custom-scroll">
                {props.board.cards.map((card) =>
                    <Card
                        key={card.id}
                        card={card}
                        boardId={props.board.id}
                        removeCard={props.removeCard}
                    />)
                }
                <Editable
                    buttonText='Add New Card'
                    displayClass='board-cards-add'
                    placeholder='Enter Card Title'
                    onSubmit={(value) => props.addCard(props.board?.id, value)}
                />
            </div>
        </div>
    )
}

export default Board


