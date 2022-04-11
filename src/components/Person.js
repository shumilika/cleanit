import React from 'react';

const Person = (props) => {
    return (
        <div>
            <div>
                {/*<img src={props.face.img}/>*/}
            </div>
            <div>
                <p>
                {props.face.name}<br/>
                {props.face.clean_type}<br/>
                Rating 3.5
                </p>
            </div>
            <div>
                {/*{props.date['12.04.2022']}*/}
            </div>
        </div>
    );
};

export default Person;