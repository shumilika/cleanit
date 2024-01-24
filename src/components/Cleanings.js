import React from 'react';
import CleaningType from "./CleaningType";
import NavigationCleanings from "./NavigationCleanings";

const Cleanings = ({bookRef}) => {
    return (
        <div>
            <NavigationCleanings/>
            <CleaningType bookRef={bookRef}/>
        </div>
    );
};

export default Cleanings;