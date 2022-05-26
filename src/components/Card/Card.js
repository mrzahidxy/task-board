import "./card.scss";
import {
  Trash,
  Clipboard,
  CheckCircle,
  Calendar,
} from "react-feather";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-top">
        {/* <div className="card-labels">
                    <Chip text='front-end' color='green' />
                    <Chip close text='urgent' color='red' />
                </div> */}
        <Trash
          onClick={() => props.removeCard(props.boardId, props.card.id)}
        />
      </div>
      <div className="card-info">
        <div className="card-title">
          <CheckCircle /> {props.card.title}
        </div>
        <div className="card-desc">
          <Clipboard /> {props.card.desc}
        </div>
        <div className="card-time"><Calendar />{props.card.date}</div>
      </div>
    </div>
  );
};

export default Card;
