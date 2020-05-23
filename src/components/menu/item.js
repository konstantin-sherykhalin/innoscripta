import React from 'react';

export default ({data}) => (
	<div className="item">
		<h3>{data.name}</h3>
		<div className="description" style={{backgroundImage:`url(${data.image})`}}>
			<p>{data.description}</p>
		</div>
		<p>Цена: {data.cost}Р</p>
	</div>
);
