import React from "react";

const Card = (props) => {
	return (
		<div className="card h-100">
			<img src={props.imageUrl} className="card-img-top" alt="Card image" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.title}</h5>
				<p className="card-text text-center">{props.description}</p>
			</div>
			<div className="card-footer bg-light border-top-0 text-center">
				<a href="#" className="btn btn-primary">Find Out More!</a>
			</div>
		</div>
	);
};

export default Card;