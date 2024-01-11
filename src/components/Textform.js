import React, { useState } from "react";

export default function Textform(props) {
  function handleonChange(e) {
    setText(e.target.value);
  }

  function handleupClick() {
      let newText = text.toUpperCase();
      setText(newText);
    console.log(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const [text, setText] = useState("");
  // setText('new text');
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleonChange}
            style={{backgroundColor: props.mode === 'dark' ? 'gray': 'white', color: props.mode === 'dark' ? 'white': 'black'}}
            
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupClick} style={{color: props.mode === 'dark' ? 'white': 'black'}}>
          convert to upperCase
        </button>
      </div>

      <div className="container my-4" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
        <h3>your text summary here</h3>
        <p>{text.split(" ").length} words and {text.length} charecters</p>
        <h2 className="my-2">Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in textbox to preview it'}</p>
      </div>

    </>
  );
}
