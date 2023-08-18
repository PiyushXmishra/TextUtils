import React, { useState } from 'react'

export default function Textforms(props) {
    const handleUpclick = () => {
        //console.log("you clicked"+Text)
        let newText = Text.toUpperCase();
        setText(newText)
    }
    const handleLoclick = () => {
        //console.log("you clicked"+Text)
        let newText = Text.toLowerCase();
        setText(newText)
    }
    const handleClearclick = () => {
        //console.log("you clicked"+Text)
        let newText = ""
        setText(newText)
    }

    const HandleOnChange = (event) => {
        //console.log("clicked");
        setText(event.target.value);
    }
    const [Text, setText] = useState('');

    return (
        <>
        <div className='Container'>
            <h1>{props.heading}</h1>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label" >Example text area</label>
                <textarea className="form-control" value={Text} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3 my-3" onClick={handleUpclick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-3 my-3" onClick={handleLoclick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-3 my-3" onClick={handleClearclick}>Clear</button>
        </div>
        <div className="Container my-4">
            <h2>Your Text Summary</h2>
            <p>{ Text.split(" ").length} words and {Text.length} characters</p>
            <p>{0.08*Text.split(" ").length} minutes reads</p>
        </div>

</>

    )
}
