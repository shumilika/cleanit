import React from 'react';
import style from "../css.modules/cleaningtype.module.css";
import window_clean from "../images/cleaning/window_clean.png";
import venic from "../images/cleaning/venic.png";

const WindowsCleaning = () => {
    return (
        <div className={`${style.cleaning}`}>
            <div className={`${style.yellow_line}`}></div>
            <div className={'d-flex container-md'}>
                <div className={'p-5'}>
                    <img src={window_clean} alt={'Windows cleanning'}/>
                </div>
                <div className={'p-5'}>
                    <h1>Windows</h1>
                    <div className={`py-4 ${style.blue_text}`}>
                        <img src={venic} className={'float-start'} alt={'venik'} />
                        <p>Our employee arrives with everything necessary at the<br/> agreed time and gets to work immediately.</p>
                    </div>
                    <p>Wash glass on both sides<br/> We clean the frame inside and out<br/> Washing mosquito nets <br/>Wipe the window sills</p>

                    <button className={`btn btn-primary btn-lg ${style.btn_clean}`}>Check availability</button>
                </div>
            </div>
        </div>
    );
};

export default WindowsCleaning;