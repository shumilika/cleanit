import React, { useState } from 'react';
import style from '../../css.modules/cleaningtype.module.css'
import venic from '../../images/cleaning/venic.png'
import { setFilterChoosedCleanningType, setFilteredData, setIsFilter } from '../../actions/CleaningsActions';
import { useDispatch, useSelector } from 'react-redux';

const CleaningPage = (props) => {

    const {cardData} = useSelector(state=>state.clean)
    const dispatch = useDispatch()

    const handleFilterChange = (value) => {
        dispatch(setFilterChoosedCleanningType(value))
        const filteredData = cardData.filter(item =>
          item.cleanType===value ||
          item.date.seconds===value
        );
        
      dispatch(setFilteredData(filteredData))
      dispatch(setIsFilter(true))
      props.bookRef.current.scrollIntoView()
      };

    return (
        <div className={`${style.cleaning}`}>
            <div className={`${style.yellow_line}`}></div>
            <div className={'d-flex container-md'}>
            <div className={'p-5'}>
                <img src={props.page.img} alt={props.page.alt}/>

            </div>
            <div className={'p-5'}>
                <h1>{props.page.name}</h1>
                <div className={`py-4 ${style.blue_text}`}>
               <img src={venic} className={'float-start'} alt={'venik'} />
                <p>{props.page.blue_text}</p>
                </div>
                <p>{props.page.dark_text}</p>

                <button onClick={()=>handleFilterChange(props.page.forFilter)} className={`btn btn-primary btn-lg ${style.btn_clean}`}>Check availability</button>
            </div>
            </div>
        </div>
    );
};

export default CleaningPage;