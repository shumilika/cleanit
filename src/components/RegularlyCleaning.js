import React from 'react';
import style from '../css.modules/cleaningtype.module.css'

const RegularlyCleaning = () => {
    return (
        <div className={`${style.cleaning}`}>
            <hr />
            <div>
                <img src={''} alt={'Regularly cleanning'}/>
            </div>
            <div>
                <h1>REGULARLY</h1>
               <img src={''} alt={'venik'} />
                <p>This is our standard – what we do with every order. We can
                    <br/>also add custom services to customize your cleaning offer.</p>
                <p>We wash the floor and wipe the baseboards Carpets vacuuming (with your vacuum cleaner if you don’t have a vacuum cleaner don’t worry, we brush carpets)
                    Wipe all accessible surfaces Wipe the switches and door handles We clean mirrors and glass surfaces We collect and take out the garbage</p>
                <button className={'btn btn-primary btn-lg'}>Check availability</button>
            </div>
        </div>
    );
};

export default RegularlyCleaning;