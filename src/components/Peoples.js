import React from 'react';
import {useSelector} from "react-redux";
import Person from "./Person";
// import Person from "./Person";

const Peoples = () => {
    const person = useSelector(state=>state)

    return (
        <div>
            {person.map(({name,date,id})=>(
                <Person name={name} date={date} id={id}/>
            ))}
            {/*<Person face={face}/>*/}

        </div>
    );
};

export default Peoples;