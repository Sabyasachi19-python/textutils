import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase button was clicked!' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here:');
    // text = "new text";    *Wrong way to change the state
    // setText("Updated Text");  //Correct way to change the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
        </div>
    )
}
