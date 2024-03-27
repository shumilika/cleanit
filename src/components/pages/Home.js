import React from 'react';
import style from '../../css.modules/home.module.css'
import Navigation from "./Navigation";
import HomeContent from "./HomeContent";
import {
    deepCleaningPage, homePage, myProfilePage,
    officeCleaningPage,
    regularlyCleaningPage,
    windowsCleaningPage
} from "../../utils/constants";
import {Route, Routes} from "react-router-dom";
import MyProfile from "./MyProfile";


const Home = ({bookRef}) => {

    return (
        <div className={`${style.background}`}>
        <Navigation/>
            <Routes>
                { ['/', homePage, regularlyCleaningPage,deepCleaningPage,officeCleaningPage,windowsCleaningPage].map((path, index) =>
                        <Route path={path} key={index} element={<HomeContent bookRef={bookRef}/>}/>)}
                 
                 { [ myProfilePage, regularlyCleaningPage,deepCleaningPage,officeCleaningPage,windowsCleaningPage].map((path, index) =>
                        <Route path={path} key={index} element={<MyProfile bookRef={bookRef}/>}/>)}


            </Routes>

        </div>
    );
};

export default Home;