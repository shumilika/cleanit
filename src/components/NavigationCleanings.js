import React from 'react';
import style from '../css.modules/navigationcleanings.module.css'
const NavigationCleanings = () => {
    return (
        <div className={`${style.nav}`}>
            <div className={`${style.nav_list}`}>
                <ul className={'justify-content-between'}>
                    <li>
                        <a href={`#`}>Regularly Cleaning</a>
                    </li>
                    <li>
                        <a href={`#`}>Deep Cleaning</a>
                    </li>
                    <li>
                        <a href={`#`}>Office Cleaning</a>
                    </li>
                    <li>
                        <a href={`#`}>Windows Cleaning</a>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default NavigationCleanings;