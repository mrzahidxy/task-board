import React, { useState } from 'react'
import { X } from 'react-feather'
import './editable.scss'

const Editable = (props) => {

  const [showEdit, setShowEdit] = useState(false);
  const [data, setData] = useState({});

  const handleData = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value })
  }

  const submission = (e) => {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit(data);
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
              id='title'
              type="text"
              placeholder={props.placeholder || props.text}
              onChange={handleData}
              autoFocus
            />

            <textarea
              id='desc'
              className={`editable-edit custom-scroll ${props.displayClass}`}
              type="text"
              placeholder={props.placeholder1}
              onChange={handleData}
            />

            <input
              id='time'
              className={` ${props.displayClass}`}
              type="datetime-local"
              onChange={handleData}
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