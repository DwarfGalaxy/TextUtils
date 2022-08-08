import React,{useState} from 'react';


export default function Textform(props) {
    const [comments, setComments] = useState('');
    let handleOnChange=(events)=>{
        setComments(events.target.value);
    }
    let toUpperCase=()=>{
        let newText=comments.toUpperCase();
        setComments(newText);
    }
    let toLowerCase=()=>{
        let newText=comments.toLowerCase();
        setComments(newText);
    }
    let clearText=()=>{
        setComments("");
    }
    
    return (
        <>
        <div className="container my-4">
            <h2>{props.heading}</h2>
            <div className="form">
                <textarea className={`form-control bg-${props.textareaColor}`}  value={comments} onChange={handleOnChange} rows="8" id='textMessage'></textarea>
                <button type="button" className="btn btn-primary my-2" onClick={toUpperCase} >Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={toLowerCase}>Convert to lowerCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            </div>

            <div className="container">
                <h1>Your text Summary</h1>
                <p>{comments.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words  </p>
                <p>{(comments.trim().split(/\s+/).length)*0.008} minutes to read.</p>
                <h2>Preview:</h2>
                <p>{comments}</p>

            </div>
            </div>
        </>
    )
}
