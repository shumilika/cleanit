import React from 'react';
import logo from '../images/CleanItLogo.png';
import style from "../css.modules/home.module.css";
import {Link as Scroll}  from "react-scroll";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
        <div className={`d-flex justify-content-between ${style.sizing}`}>
      <div className={'ps-5'}>
          <img src={logo} alt={'logo'}/>
      </div>
            <div className={''}>
                <ul className={`${style.nav}`}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Scroll to={'book'}><Link to={'/book'}>Book</Link></Scroll></li>
                    <li><Link to={'/join_or_team'} className={'me-5'}>Join our team</Link></li>
                    <li><Link to={'/signUp'} id={`${style.signUp}`} className={'ms-4'}>Sign up</Link></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navigation;