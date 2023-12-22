import React from 'react';
import CleaningPage from "./CleaningPage";
import {Route, Routes} from "react-router-dom";
import {
    cleanings,
    deepCleaningPage,
    myProfilePage,
    officeCleaningPage,
    regularlyCleaningPage,
    windowsCleaningPage
} from "../utils/constants";

const CleaningType = () => {
    return (

<Routes>
    {['/', '/home',myProfilePage,`/${myProfilePage}/${regularlyCleaningPage}`,regularlyCleaningPage].map((path, index) =>
        <Route path={path} key={index} element={<CleaningPage page={cleanings["regularly"]}/>}/>)}

    <Route path={deepCleaningPage} element={<CleaningPage page={cleanings["deep"]}/>}/>

    <Route path={officeCleaningPage} element={<CleaningPage page={cleanings["office"]}/>}/>
    <Route path={windowsCleaningPage} element={<CleaningPage page={cleanings["windows"]}/>}/>

</Routes>

    );
};

export default CleaningType;