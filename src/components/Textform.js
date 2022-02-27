import React ,{useState} from 'react'
export default function Textform(props) {
  const [text , setText] = useState("enter text here");
  const handleUpclick=()=>{
    console.log("Wants to change in uppercase"+text);
    let up=text.toUpperCase();
    setText(up)
    props.showAlert("Converted to Upper Case","Success")

  }
  const handleLwclick=()=>{
    console.log("Wants to change in uppercase"+text);
    let up=text.toLowerCase();
    setText(up)
    props.showAlert("Converted to Lower Case","Success")
  }
  const handleGoclick=()=>{
    console.log("Wants to Clear space"+text);
    let up="";
    setText(up)
    props.showAlert("Data has been cleared","Success")

  }
  const handleCopy=()=>{
    console.log("copying txt")
    let text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipbaord","Success");

}
  const handleOnchange=(event)=>{
    console.log("On change");
    setText(event.target.value) //this helps user to type the changes he makes in the textarea
  }
  
  return (
    <>
    <div className="container"style={{color:props.mode==='light'?'#153a3f':'white'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
<label htmlFor="mybox" className="form-label">{props.name}</label>
<textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='light'?'white':'#231f1f',color:props.mode==='light'?'#153a3f':'white'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-3" onClick={handleLwclick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-3" onClick={handleGoclick}>Clear Space</button>
<button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3"style={{color:props.mode==='light'?'#153a3f':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} charcters</p>
      <h2>Time to read</h2>
      <p>{0.008 * text.split(" ").length} minutes reqired</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
  
}
