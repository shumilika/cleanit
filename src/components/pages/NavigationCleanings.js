import React from 'react';
import style from '../../css.modules/navigationcleanings.module.css'
import {Link} from "react-router-dom";
import {deepCleaningPage, officeCleaningPage, regularlyCleaningPage, windowsCleaningPage} from "../../utils/constants";


const NavigationCleanings = () => {
    return (
        <nav>
        <div className={`${style.navigation}`}>
            <div className={`${style.nav_list}`}>
                <ul className={`justify-content-between ${style.clean_nav}`}>
                    <li>
                        <Link to={regularlyCleaningPage}>Regularly Cleaning</Link>
                       </li>
                    <li>
                        <Link to={deepCleaningPage}>Deep Cleaning</Link>
                    </li>
                    <li>
                        <Link to={officeCleaningPage}>Office Cleaning</Link>
                    </li>
                    <li>
                        <Link to={windowsCleaningPage}>Windows Cleaning</Link>
                    </li>

                </ul>

            </div>
        </div>
        </nav>
    );
};

export default NavigationCleanings;