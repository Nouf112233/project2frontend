import React from 'react'

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
                    <img src="" alt="image" />
                </div>
                <div className="slide">
                    <img src="" alt="image" />
                </div>
                <div className="slide">
                    <img src="" alt="image" />
                </div>
                <div className="slide">
                    <img src="" alt="image" />
                </div>
                <div className="slide">
                    <img src="" alt="image" />
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
