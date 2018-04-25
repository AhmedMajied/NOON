import React from "react"
import "./css/countrySelect.css"
export const CountrySelect =(props)=>
{
    return(
        <div className="cdiv-country">
        <select className="cselect-country selectpicker col-lg-3 pull-right">
        {
            props.country.countries.map((country,index)=>
            {
                return(
                    <option key={index}>{country}</option>
                );
            })
        }
        </select>
    </div>
    );
}