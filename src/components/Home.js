import React, {useState} from 'react';
import style from '../css.modules/home.module.css'
import Navigation from "./Navigation";
import picture from '../images/For_homePage/HomePicture.png'
import HomeContent from "./HomeContent";
import {
    cleanings,
    deepCleaningPage, homePage, myProfilePage,
    officeCleaningPage,
    regularlyCleaningPage,
    windowsCleaningPage
} from "../utils/constants";
import {Link, Route, Routes} from "react-router-dom";
import CleaningPage from "./CleaningPage";
import MyProfile from "./MyProfile";
import {useSelector} from "react-redux";

const Home = () => {
    const state = useSelector(state=>state.login)
    const [page, setPage] = useState(true);

    const closePageAction =()=>{
        setPage(false);
    }

    return (
        <div className={`${style.background}`}>
        <Navigation/>
            <Routes>
                { ['/', homePage, regularlyCleaningPage,deepCleaningPage,officeCleaningPage,windowsCleaningPage].map((path, index) =>
                        <Route path={path} key={index} element={<HomeContent/>}/>)}
                 <Route path={myProfilePage} element={<MyProfile closePage={closePageAction}/>}/>


            </Routes>

        </div>
    );
};

export default Home;