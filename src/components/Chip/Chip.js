import './chip.scss'
import { X } from 'react-feather'

const Chip = (props) => {
    return (
        <div className='chip' style={{ backgroundColor: props.color }}>
            {props.text}
            {props.close && <X onClick={props.Onclose ? props.close() : ""}/>}
        </div>
    )
}

export default Chip