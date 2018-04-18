import React from "react";
import "./../shared-libraries/bootstrap-3.3.7.min.css";
import "./CSS/home-images-carousel.css";

import "jquery"
import "./../shared-libraries/bootstrap-3.3.7.min.js";
import "./JS/home-images-carousel.js";


export class NewsCarousel extends React.Component{

	constructor(props){
		super();
		this.state = {
			data: props.data
		};
	}

	render(){

		return(			
		    <div className ="row">
				<div className="col-xs-12">
					<div className="carousel slide" id="idiv-news-carousel" data-ride="carousel">

						{/* images slides */}
						<div className="carousel-inner">
							{this.state.data.data.map((carouselItem,i) =>
								<div className={"item "+((i===0)?"active":"") } key={i} >
									<div className="col-xs-4 cdiv-carousel-item">
										<img src={carouselItem.image} alt={carouselItem.captionText} className="img-responsive cimg-carousel-image" />
										<div className="cdiv-carousel-item-caption">
											<span className="cspan-published-time">{carouselItem.publishTime}</span>
											<div className="cdiv-text">
												{carouselItem.captionText}
											</div>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Indicators */}
						<ol className="carousel-indicators">
							{this.state.data.data.map((item,i) =>
								<li data-target="#idiv-news-carousel" data-slide-to={i} key={i} className={(i===0)?"active":""}></li>
							)}
						</ol>
					</div>
				</div>
		    </div>
		);		
	}
}
