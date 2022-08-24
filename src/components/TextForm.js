import React, {useState} from 'react'



export default function TextForm(props) {
    const handleOnClick = ()=>{
        const NewText = text.toUpperCase();
        setText(NewText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] =useState("Enter text here");

  return (
    <>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label for="boxText" className="form-label">{props.labelText}</label>
        <textarea onChange={handleOnChange} className="form-control" value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Convert to Upercase</button>
    </>
  )
}