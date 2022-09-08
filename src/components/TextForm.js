import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] =useState("");
    const handleOnUpClick = ()=>{
        const NewText = text.toUpperCase();
        props.showAlert("Convert in Lower Case","success")
        setText(NewText)
    }
    const handleOnLoClick = ()=>{
        const NewText = text.toLowerCase();
        setText(NewText)
        props.showAlert("Convert in Lower Case","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleOnColorClick = ()=>{
        var colors = ['#ff0000', '#00ff00', '#0000ff'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById("myBox").style.color = random_color;
    }
    const handleCopyText = ()=>{
        var copyText = document.getElementById('myBox');
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
        props.showAlert("Copied to Clipboard","success")
    }
  return (
    <>
        <div className="container" style={{color : props.mode ==='dark'?'white':'black'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label for="boxText" className="form-label">{props.labelText}</label>
        <textarea style={{backgroundColor: props.mode === 'dark'?'grey':'white'}} onChange={handleOnChange} className="form-control" value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleOnUpClick}>Convert to UperCase</button>
        <button className="btn btn-secondary mx-1 my-1" onClick={handleOnLoClick}>Convert to LowerCase</button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleOnColorClick}>change Text Colour</button>
        <button className="btn btn-info mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>Your Text contains {text.split(" ").filter((element)=>{
                return element.length !==0;
            }).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
        </div>
    </>
  )
}