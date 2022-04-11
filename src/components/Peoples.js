import React from 'react';
import {useSelector} from "react-redux";
// import Person from "./Person";

const Peoples = () => {
    const {name, img, date,time} = useSelector(state=>state)

    return (
        <div>
            <div>
                <img src={img} alt={'face'}/>
            </div>
            <div>
                <p>
                    {name}<br/>
                    {/*{clean_type}<br/>*/}
                    Rating 3.5
                </p>
            </div>
            <div>
                {date}<br/>
                {time}
            </div>
            {/*<Person face={face}/>*/}

        </div>
    );
};

export default Peoples;