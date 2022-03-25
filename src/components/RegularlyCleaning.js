import React from 'react';
import style from '../css.modules/cleaningtype.module.css'
import regular_clean from '../images/cleaning/regular_clean.png'
import venic from '../images/cleaning/venic.png'

const RegularlyCleaning = () => {
    return (
        <div className={`${style.cleaning}`}>
            <div className={`${style.yellow_line}`}></div>
            <div className={'d-flex container-md'}>
            <div className={'p-5'}>
                <img src={regular_clean} alt={'Regularly cleanning'}/>
            </div>
            <div className={'p-5'}>
                <h1>Regularly</h1>
                <div className={`py-4 ${style.blue_text}`}>
               <img src={venic} className={'float-start'} alt={'venik'} />
                <p>This is our standard – what we do with every order. We can
                    <br/>also add custom services to customize your cleaning offer.</p>
                </div>
                <p>We wash the floor and wipe the baseboards<br/> Carpets vacuuming (with your vacuum cleaner if you don’t have a <br/>vacuum cleaner don’t worry, we brush carpets)<br/>
                    Wipe all accessible surfaces<br/> Wipe the switches and door handles<br/> We clean mirrors and glass surfaces <br/>We collect and take out the garbage</p>

                <button className={`btn btn-primary btn-lg ${style.btn_clean}`}>Check availability</button>
            </div>
            </div>
        </div>
    );
};

export default RegularlyCleaning;