import React from 'react';
import logo from '../images/CleanItLogo.png';
import style from "../css.modules/home.module.css";

const Navigation = () => {
    return (
        <div>
        <div className={`d-flex justify-content-between ${style.sizing}`}>
      <div className={'ps-5'}>
          <img src={logo} alt={'logo'}/>
      </div>
            <div className={''}>
                <ul className={`${style.nav}`}>
                    <li><a href={'#'}>Home</a></li>
                    <li><a href={'#'}>Book</a></li>
                    <li><a href={'#'} className={'me-5'}>Join our team</a></li>
                    <li><a href={'#'} id={`${style.signUp}`} className={'ms-4'}>Sign up</a></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navigation;