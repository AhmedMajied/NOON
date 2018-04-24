/* author: Ahmed Mohamed Ahmed */

import React from "react";

import {Carousel} from "./Carousel"

export class ImagesCarousel extends React.Component{

	constructor(props){
		super();
		this.state = {
			data: props.data
		};
	}

	render(){

		return(
			<Carousel carouselID={"idiv-news-carousel"}>
				{/* images slides */}
				<div className="carousel-inner" id="idiv-carousel-inner-images">
					{this.state.data.data.map((carouselItem,i) =>
						<div className={"carousel-item "+((i===0)?"active":"") } key={i} >
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-4 cdiv-carousel-item">
									<img src={carouselItem.image} alt={carouselItem.captionText} className="img-fluid cimg-carousel-image" />
									<div className="cdiv-carousel-item-caption">
										<span className="cspan-published-time">{carouselItem.publishTime}</span>
										<div className="cdiv-text">
											{carouselItem.captionText}
										</div>
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
		    </Carousel>
		);		
	}
}
