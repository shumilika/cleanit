import React, { useRef } from 'react';
import style from "../css.modules/home.module.css";
import picture from "../images/For_homePage/HomePicture.png";

const HomeContent = ({bookRef}) => {
   
    return (
            <div className={'d-flex justify-content-between'}>
                <div className={style.text_path}>
                    <h1 id={style.yellow}>always clean</h1>
                    <h1 id={style.blue}>Home & office</h1>
                    <p id={style.txt}>
                        It’s hard to find someone who enjoys cleaning. It takes a<br/> lot of energy, time, and you always have to
                        do it when <br/>there are so many other things to do around you.<br/><br/> Is it possible to make it so that your
                        surroundings are <br/>clean, but not to create a constant torture of cleaning? Of <br/>course it is!
                    </p>
                    <button onClick={() => bookRef.current.scrollIntoView()} className={`btn btn-primary ${style.btn_clean}`}>Book now!</button>
                </div>
                <div>
                    <img src={picture} alt={'uborzhitsa'}/>
                </div>
            </div>

    );
};

export default HomeContent;