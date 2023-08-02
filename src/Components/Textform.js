import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here2');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","Success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Clear The Text!","Success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
      var text=document.getElementById("myBox");
        text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied!","Success");
    }
    const handleExtraSpaces = () => {
         let newText=text.split(/[ ]+/);
         setText(newText.join(" "))
         props.showAlert("Removed The Extra Space!","Success");
    }

  return (
    <> 
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
       <h1 ClassName="my-2">{props.heading}</h1>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e': 'white', color:props.mode=== 'dark'?'white': 'black'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Minute read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
