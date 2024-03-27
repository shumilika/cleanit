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
                        <Link to={regularlyCleaningPage} >Regularly <span className={style.cleaningLink}>Cleaning</span></Link>
                       </li>
                    <li>
                        <Link to={deepCleaningPage}>Deep <span className={style.cleaningLink}>Cleaning</span></Link>
                    </li>
                    <li>
                        <Link to={officeCleaningPage}>Office <span className={style.cleaningLink}>Cleaning</span></Link>
                    </li>
                    <li>
                        <Link to={windowsCleaningPage}>Windows <span className={style.cleaningLink}>Cleaning</span></Link>
                    </li>

                </ul>

            </div>
        </div>
        </nav>
    );
};

export default NavigationCleanings;