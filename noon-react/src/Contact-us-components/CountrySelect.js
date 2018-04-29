/* author : Mariam Ashraf */
import React from "react"
import "./css/countrySelectStyle.css"
export const CountrySelect =(props)=>
{
    return(
        /**Start Country Select Options */
        <div className="cdiv-country">
        <select className="cselect-country selectpicker col-lg-3 pull-right">
        {
            /** Start Loop on countries */
            props.country.countries.map((country,index)=>
            {
                return(
                    /** Set Country as option */
                    <option key={index}>{country}</option>
                );
            })
            /**End Loop */
        }
        </select>
    </div>
    /**End Country Select Options */

    );
}