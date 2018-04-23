import React from "react"
import "./css/ourOffices.css"
export class OurOffices extends React.Component{
    constructor(props){
        super();
        this.state={
            title:props.OurOffices.title,
            offices:props.OurOffices.offices,
        }
    }
    render()
    {
        return(
            <div className="cdiv-back-our-offices">
                <div className="cdiv-front-our-offices">
                    <h2 id="ih2-our-offices">{this.state.title}</h2>
                    <div id="idiv-our-offices-places">
                    {   this.state.offices.map((office, index) => {
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
}