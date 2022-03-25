import React from 'react';
import style from '../css.modules/cleaningtype.module.css'
import RegularlyCleaning from "./RegularlyCleaning";
import DeepCleaning from "./DeepCleaning";
import OfficeCleaning from "./OfficeCleaning";
import WindowsCleaning from "./WindowsCleaning";

const CleaningType = () => {
    return (
        <div>
            <RegularlyCleaning/>
            <DeepCleaning/>
<OfficeCleaning/>
            <WindowsCleaning/>
        </div>
    );
};

export default CleaningType;