import React from 'react';

import Item from './item';


const data = [
	{
		id: 1,
		name: 'Престо',
		description: 'Сочетание четырех видов мяса, томатный соус, сыр, помидоры, перец, зелень',
		image: '',
		cost: 500,
	},
	{
		id: 2,
		name: 'Маргарита',
		description: 'Классический томатный соус, сыр моцарелла, базилик, масло оливковое',
		image: '',
		cost: 275,
	},
	{
		id: 3,
		name: 'Прошутто и салями',
		description: 'Сыр моцарелла, соус томатный, пармская сыровяленая ветчина, острая колбаса салями',
		image: '',
		cost: 310,
	},
];

export default (props) => (
	<div className="menu">
		{data.map(e => (
			<Item
				key={e.id}
				data={e}
			/>
		))}
	</div>
);
