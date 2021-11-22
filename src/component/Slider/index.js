import React from 'react'
import "./style.css"

function Slider() {
    return (
        <div className="slider">
            <div className="slides">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />
                <input type="radio" name="radio-btn" id="radio5" />
                <div className="slide first">
                    <img src="https://i.pinimg.com/236x/d0/5b/1c/d05b1c7da12f92424c4290e64ca45652.jpg" alt="image1" />
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/236x/38/36/34/3836348d1d0df258e24e65295e0ae855.jpg" alt="image2" />
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/236x/60/8c/68/608c68fae8fc7290fa44941004fb0c8e.jpg" alt="image3" />
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/236x/a3/db/64/a3db64a443a6df5337558cc2131e27ea.jpg" alt="image4" />
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/236x/01/65/28/0165286675cca8faebabb56c43796104.jpg" alt="image5" />
                </div>
                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                    <div className="auto-btn5"></div>
                </div>
            </div>
            <div className="navigation-manual">
                <label for="radio1" className="manual-btn" />
                <label for="radio2" className="manual-btn" />
                <label for="radio3" className="manual-btn" />
                <label for="radio4" className="manual-btn" />
                <label for="radio5" className="manual-btn" />
            </div>
            
        </div>
    )
}

export default Slider
