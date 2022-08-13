import React,{ useState } from 'react'


export default function TextForm(props) {
    const handleUpClick=() => {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPER CASE","success");
    }
    const handleLowClick=() => {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }
    const handleChange=(event) => {
        setText(event.target.value);
    }

    const textLen=(str) => {
        let len=str.split(" ");
        return len[len.length]==" "? len.length:len.length-1;

    }
    const [text,setText]=useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode==='dark'? 'white':'black' }}>
                <div >
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" style={{ backgroundColor: props.mode==='dark'? 'black':'white',color: props.mode==='dark'? 'white':'black' }} id="myBox" onChange={handleChange} value={text} rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UPPERCASE</button>
                    <button className="btn btn-success mx-3" onClick={handleLowClick}>Convert to lowercase</button>
                </div>
                <div className="container my-3">
                    <h2>Your Text Summary</h2>
                    <p>{textLen(text)} words and {text.length} characters</p>
                    <p>{0.008*textLen(text)} minutes to read</p>
                    <h4>Preview</h4>
                    <p>{text.length>0? text:'Enter some text in the above textbox to be previewed'}</p>
                </div>
            </div>
        </>
    )
}
