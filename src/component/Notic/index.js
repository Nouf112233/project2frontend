import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './style.css'

function Notic(props) {
    const [name,setName]=useState("");
    const [comment,setComment]=useState("");
    console.log(props);
    const addComment=()=>{
        axios.put("http://localhost:5000/product/not", {id:props.id,Notice:[name,comment]})
    }

    return (
        <div className="notic">
            <h1>add a comment</h1>
            <form>
          <h5>name</h5>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h5>comment</h5>
          <input
            type="text"
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button className="notic-button" onClick={addComment}>Send</button>
        </form>  
        </div>
    )
}

export default Notic
