import React from 'react';

export default ({data,...props}) => {
	const [remove_button_state,set_remove_button_state] = React.useState(true);
	const [number,set_number] = React.useState(data.number);
	React.useEffect(_ => set_number(data.number),[data.number]);

	const on_add	= () => props.add({id:data.id});
	const on_remove	= () => props.remove({id:data.id});
	const on_reject	= () => props.reject({id:data.id});
	const on_number_input = (e) => {
		let value = e.target.value;
		set_number(+value);
		props.change_number({id:data.id,number});
	}

	return (
		<div className="item">
			<h3>{data.name}</h3>
			<div className="description" style={{backgroundImage:`url(${data.image})`}}>
				<p>{data.description}</p>
			</div>
			<p>Цена: {data.cost}Р</p>
			<div className="add_to_cart">
				{data.number ? (
					<>
					<button
						key="first_button"
						className={remove_button_state ? '' : 'fake'}
						onMouseEnter={_ => set_remove_button_state(true)}
						onMouseLeave={_ => set_remove_button_state(false)}
						onClick={on_reject}
					>
						{remove_button_state ? 'Убрать из корзины' : 'В корзине'}
					</button>
					<button onClick={on_remove}>-</button>
					<input type="number" value={number} onInput={on_number_input} />
					<button onClick={on_add}>+</button>
					</>
				) : (
					<button key="first_button" onClick={on_add}>Добавить к заказу</button>
				)}
			</div>
		</div>
	);
}
