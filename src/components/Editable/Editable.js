import React, { useState } from 'react'
import { X } from 'react-feather'
import './editable.scss'

const Editable = (props) => {

  const [showEdit, setShowEdit] = useState(false);
  const [inputText, setInputText] = useState(props.defaultValue || "");

  const submission = (e) => {
    e.preventDefault();
    if (inputText && props.onSubmit) {
      setInputText("");
      props.onSubmit(inputText);
    }
    setShowEdit(false);
  };
  return (
    <div className='editable'>
      {
        showEdit ?
          (<form className={`editable-edit ${props.editClass || ''}`}
          onSubmit={submission}>

            <input
              type="text"
              value={inputText}
              placeholder={props.placeholder || props.text}
              onChange={(event) => setInputText(event.target.value)}
              autoFocus
            />


            <div className="editable-edit-footer">
              <button type='submit'>
                {props.buttonText || " Add"}
              </button>
              <X onClick={() => setShowEdit(false)} />
            </div>

          </form>) :
          (
            <p className={`editable-display ${props.displayClass || ''}`} onClick={() => setShowEdit(true)}>{props.text || 'Add Item'}</p>
          )
      }

    </div>
  )
}

export default Editable