/* author : Mariam Ashraf Fekry*/
import React from "react"
import "./css/ourOfficesStyle.css"
export const OurOffices =(props)=>
{
    return(
        /**Start Our Offices */
        <div className="cdiv-back-our-offices">
            {/*Start Front OurOfficess*/}
            <div className="cdiv-front-our-offices">
                {/*Start Title*/}
                <h2 id="ih2-our-offices">{props.OurOffices.title}</h2>
                {/*End Title*/}
                <div class="cdiv-our-offices-places">
                {   /**Start Loop On Officess and take each name and email of each office */
                    props.OurOffices.offices.map((office, index) => {
                    return( <div className="cdiv-our-offices" key={index}>
                        <span className="li"></span>
                        <span className="cspan-office">{office.name}:</span>{office.email}
                        
                    </div> 
                    );
                })}
                {/**EndLoop */}
                </div>
            </div>
            {/*End Front OurOfficess*/}
        </div>
        /**End OurOfficess */
    );
}