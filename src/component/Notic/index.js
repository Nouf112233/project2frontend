import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './style.css'

function Notic(props) {
    const [name,setName]=useState("");
    const [comment,setComment]=useState("");
    
    const addComment=()=>{
      
        axios.put("https://project2-3brood.herokuapp.com/product/not", {id:props.id,Notice:[name,comment]})
        console.log(comment);
    }
    

    return (
        <div className="notic">
            <h1>add a comment</h1>
            <form>
          <h5>name</h5>
          <input
            type="text"
            onChange={(e) =>{
              e.preventDefault();
               setName(e.target.value);
              }}
            required
          />
          <h5>comment</h5>
          <input
            type="text"
            onChange={(e) =>{
              e.preventDefault();
              setComment(e.target.value);
            } }
            required
          />
          <button className="notic-button" onClick={addComment}>Send</button>
        </form>  
        </div>
    )
}

export default Notic
