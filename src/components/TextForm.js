import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleLowClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");

    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");

    }

    const handleCopy = () => {
        // console.log("I am copy");
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleOnChange=(event)=>{
        // console.log("On change"); 
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("new Text");
    return (
        <>
        <div className="container" style = {{color: props.mode==='dark'?'white':'#042743'}}>
            <h4>{props.heading}</h4>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange ={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white', color:  props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>

        <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
            <h4>Your text summary</h4>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read characters</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here!"}</p>
        </div>
        </>
    )
}