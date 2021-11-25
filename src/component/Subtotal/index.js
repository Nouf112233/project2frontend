import React,{useState} from 'react'
import './style.css'

function Subtotal(props) {
    const[basket,setBasket]=useState(null);
    const[value,setValue]=useState(null)
    return (
        <div className="subtotal">
            <p>
                subtotal (<span>{props.count}</span> items) <strong>$ {props.total}</strong>
            </p>
            <small className="subtotal-gift" >
                This order contain a gift
            </small>
            <button>
                proceed to checkout
            </button>
            
        </div>
    )
}

export default Subtotal
