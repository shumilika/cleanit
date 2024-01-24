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

const CleaningType = ({bookRef}) => {
    return (

<Routes>
    {['/', '/home',myProfilePage,`/${myProfilePage}/${regularlyCleaningPage}`,regularlyCleaningPage].map((path, index) =>
        <Route path={path} key={index} element={<CleaningPage bookRef={bookRef} page={cleanings["regularly"]}/>}/>)}

    <Route path={deepCleaningPage} element={<CleaningPage bookRef={bookRef} page={cleanings["deep"]}/>}/>

    <Route path={officeCleaningPage} element={<CleaningPage bookRef={bookRef} page={cleanings["office"]}/>}/>
    <Route path={windowsCleaningPage} element={<CleaningPage bookRef={bookRef} page={cleanings["windows"]}/>}/>

</Routes>

    );
};

export default CleaningType;