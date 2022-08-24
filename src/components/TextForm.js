import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] =useState("");
    const handleOnUpClick = ()=>{
        const NewText = text.toUpperCase();
        setText(NewText)
    }
    const handleOnLoClick = ()=>{
        const NewText = text.toLowerCase();
        setText(NewText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleOnColorClick = (event)=>{
        var colors = ['#ff0000', '#00ff00', '#0000ff'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById("exampleFormControlTextarea1").style.color = random_color;

    }
    


  return (
    <>
        <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label for="boxText" className="form-label">{props.labelText}</label>
        <textarea onChange={handleOnChange} className="form-control" value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnUpClick}>Convert to UperCase</button>
        <button className="btn btn-secondary mx-1" onClick={handleOnLoClick}>Convert to LowerCase</button>
        <button className="btn btn-danger mx-1" onClick={handleOnColorClick}>change Text Colour</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>Your Text contains {text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
        </div>
    </>
  )
}