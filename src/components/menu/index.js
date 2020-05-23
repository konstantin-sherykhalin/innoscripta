import React from 'react';

import Item from './item';


const data = [
	{
		id: 1,
		name: 'Престо',
		description: 'Сочетание четырех видов мяса, томатный соус, сыр, помидоры, перец, зелень',
		image: 'http://www.sobaka.ru/images/post/00/09/78/62/_huge.jpg',
		cost: 500,
	},
	{
		id: 2,
		name: 'Маргарита',
		description: 'Классический томатный соус, сыр моцарелла, базилик, масло оливковое',
		image: 'https://cache3.youla.io/files/images/780_780/5c/c1/5cc1816080e08e16160b9da3.jpg',
		cost: 275,
	},
	{
		id: 3,
		name: 'Прошутто и салями',
		description: 'Сыр моцарелла, соус томатный, пармская сыровяленая ветчина, острая колбаса салями',
		image: 'https://fermer.blog/media/res/1/1/9/7/9/3/119793.pxm6po.840.jpg',
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
