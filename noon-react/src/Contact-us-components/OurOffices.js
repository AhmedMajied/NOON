import React from "react"
import "./css/ourOffices.css"
export const OurOffices =(props)=>
{
    return(
        <div className="cdiv-back-our-offices">
            <div className="cdiv-front-our-offices">
                <h2 id="ih2-our-offices">{props.OurOffices.title}</h2>
                <div id="idiv-our-offices-places">
                {   props.OurOffices.offices.map((office, index) => {
                    return( <div className="cdiv-our-offices" key={index}>
                        <span className="li"></span>
                        <span className="cspan-office">{office.name}:</span>{office.email}
                        
                    </div> 
                    );
                })}
                </div>
            </div>
        </div>
    );
}