import React from 'react';

export default ({
	style = {
		height: 20,
		width:  20,
	},
	checked = false,
	on_click = () => null,
} = {}) => (
	<div className="checkbox" style={style} onClick={on_click}>
		<div className={'kernel '+(checked ? 'checked' : '')}>
			{checked && (<div className="tick" />)}
		</div>
	</div>
);
