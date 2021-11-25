import React from 'react'
import './style.css'

function Comments(props) {
    
    return (
        <div className="comments">
            {props && (
                props.notic.map(item=>{
                    return (
                        <div className="comment">
                            <p>{item[0]}</p>
                            <h5>{item[1]}</h5>
                        </div>
                    )
                   
                })
            )}
            
        </div>
    )
}

export default Comments
