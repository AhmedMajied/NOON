import React from "react"
import "./css/countrySelect.css"
export class CountrySelect extends React.Component{
    constructor(props){
        super();
        this.state={
             countries:props.country.countries
        }
    }
    render()
    {
        return(
            <div className="cdiv-country">
            <select className="cselect-country selectpicker col-lg-3 pull-right">
            {
                this.state.countries.map((country,index)=>
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
}