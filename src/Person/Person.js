import React from 'react';
import './Person.css';

const person = (props) => { //props bármi más lehet de íratlan szabály, ez kell ha a komponens kezel változót
    return (
        <div className='Person'>
            <p onClick={props.click}>Random: {Math.floor(Math.random() * 6 + 1)}, name: {props.name}, age {props.age}</p>
            <input type='text' onChange={props.change} value={props.name} />
            <input type='button' value='Töröl' onClick={props.delete} />
        </div>
    )
}

export default person;