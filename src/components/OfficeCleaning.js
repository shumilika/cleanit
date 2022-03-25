import React from 'react';
import style from "../css.modules/cleaningtype.module.css";
import office_clean from "../images/cleaning/office_clean.png";
import venic from "../images/cleaning/venic.png";

const OfficeCleaning = () => {
    return (
        <div className={`${style.cleaning}`}>
            <div className={`${style.yellow_line}`}></div>
            <div className={'d-flex container-md'}>
                <div className={'p-5'}>
                    <img src={office_clean} alt={'Office cleanning'}/>
                </div>
                <div className={'p-5'}>
                    <h1>Office</h1>
                    <div className={`py-4 ${style.blue_text}`}>
                        <img src={venic} className={'float-start'} alt={'venik'} />
                        <p>TThe cleaner comes every morning or evening to<br/> restore cleanliness and order.</p>
                    </div>
                    <p>Wipe all accessible surfaces, switches and door handles<br/> Washing windows, mirrors and glass surfaces <br/>Washing furniture inside and outside<br/>
                        Wiping the walls <br/>Washing chandeliers and lamps <br/>We wash the floor, wipe the baseboards and vacuum the carpet<br/> We take out the garbage</p>

                    <button className={`btn btn-primary btn-lg ${style.btn_clean}`}>Check availability</button>
                </div>
            </div>
        </div>
    );
};

export default OfficeCleaning;