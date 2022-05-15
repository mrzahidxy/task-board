import "./card.scss"
import { CheckSquare, Clock, Trash} from 'react-feather'
import Chip from '../Chip/Chip'

const Card = (props) => {
    return (
        <div className='card'>
            <div className="card-top">
                <div className="card-labels">
                    <Chip text='front-end' color='green' />
                    <Chip close text='urgent' color = 'red'/>
                </div>
                <Trash onClick={() => props.removeCard(props.boardId, props.card.id)}/>
            </div>
            
            <div className="card-title">{props.card.title}</div>
            <div className="card-footer">
                <p><Clock/> 29 Sept</p>
                <p><CheckSquare/> 1/4</p>

            </div>
        </div>
    )
}

export default Card