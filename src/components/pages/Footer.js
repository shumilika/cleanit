import React from 'react';
import style from '../../css.modules/footer.module.css';
import logo from '../../images/CleanItLogo.png';

const Footer = () => {
    return (
        <div className={`${style.footerBox}`}>
            <div className={`${style.footer} d-flex justify-content-between`}>
            <div className={'p-5'}>
                <img src={logo} alt={'Clean it logo'} />
            </div>
            <div className={'p-5'}>
                <p className={style.text}>Plaut, 10<br/>
                    Science Park<br/>
                    76706, Rehovot<br/>
                    <br/>
                    Israel Phone: 054-56-99-350<br/>
                    E-mail: go@tel-ran.com</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;