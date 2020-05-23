import React from 'react';

export default ({data}) => (
	<div className="item">
		<h3>{data.name}</h3>
		<img src={data.image} />
		<p>{data.description}</p>
		<p>Цена: {data.cost}Р</p>
	</div>
);
