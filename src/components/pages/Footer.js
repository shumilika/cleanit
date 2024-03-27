import React from 'react';
import style from '../../css.modules/footer.module.css';
import logo from '../../images/CleanItLogo.png';

const Footer = () => {
    return (
        <div id={`${style.footerBox}`}>
            <div className={`d-flex justify-content-between`} id={style.footer}>
            <div className={'p-5'}>
                <img src={logo} alt={'Clean it logo'} id={style.footerLogoImg}/>
            </div>
            <div className={'p-5'}>
                <p className={style.text}>
                    <span>
                    Plaut, 10 <br className={style.break}/>
                    Science Park <br className={style.break}/>
                    76706, Rehovot, Israel
                    </span>
                    <br className={style.break}/>
                    <span>
                     Phone: 054-56-99-350 <br className={style.break}/>
                    E-mail: go@tel-ran.com
                    </span>
                    </p>
            </div>
        </div>
        </div>
    );
};

export default Footer;