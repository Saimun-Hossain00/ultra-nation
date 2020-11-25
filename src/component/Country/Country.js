import React from 'react';

const Country = (props) => {
    
    const {name,population,region, flag} = props.country;
    const countryStyle = {border:'2px solid blue',margin:'10px',padding:'10px'};
    const handelAddCountry = props.handelAddCountry;
 
    return (
        <div style={countryStyle}>
            <h4>This is a {name}</h4>
            <img style={{height:'50px'}} src={flag} alt=""/>
           <p>population:{population}</p>
           <p><small>Region: {region}</small></p>
           <button onClick={()=> handelAddCountry(props.country)}>Add Country</button>

  
        </div>
    );
};

export default Country;