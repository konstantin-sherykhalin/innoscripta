export default function({menu,cart}) {
	let list = [];
	for(let menu_item of menu) {
		let cart_item = cart.find(e => e.id==menu_item.id);
		if(!cart_item) cart_item = {number:0};
		list.push({
			...menu_item,
			...cart_item,
		});
	}
	return list;
}
