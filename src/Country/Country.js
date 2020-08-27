import React from 'react';

const country = (props) => {
    const {name,population,flag} = props.country;
    const countryStyle = {
        border :'1px solid red',
        margin :'10px',
        padding:'10px'
    }
   const eventHandler = props.eventHandler;
    return (
        <div style={countryStyle}>
            <h4>this is {name}</h4>
            <p>{population}</p>
            <img style={{height: '100px'}} src={flag} alt=""/> <br/>
            <button onClick = {() => eventHandler(props.country)}>Add country</button>
        </div>
    );
};

export default country;



