const address = 'https://.../api/v1';

export default function* API(method,data = {}) {
	try {
		/*
		How it should be:

		const res = yield fetch(address+method,{
			method: 'POST',
			mode: 'no-cors',
			crossDomain: true,
			headers: {
				'Accept':		'application/json',
				'Content-Type':	'application/json',
			},
			body: JSON.stringify(data),
		});

		if(res.status == 200) {
			// console.log(await res.text());
			let data = yield res.json();
			// console.log(data);
			if(data.response)	return {response:data.response};
			if(data.error)		return {error:data.error};
		} else if(res.status == 500) {
			return {error:{code:res.status,message:'Server is unavailble'}};
		} else {
			console.log(res);
			return {error:{code:res.status,message:'Connection problems'}};
		}
		*/

		// yield new Promise(res => setTimeout(res,2000));

		if(Math.random() < 0.2) {
			return {error:{type:'internal',message:'MySQL error'}};
		} else {
			return {response:{list:[
				{
					id: 1,
					name: 'Presto',
					description: 'Combination of four meat kinds, tomato sauce, cheese, tomatoes, pepper, herbs',
					image: 'http://www.sobaka.ru/images/post/00/09/78/62/_huge.jpg',
					cost: 500,
				},
				{
					id: 2,
					name: 'Margarita',
					description: 'Classic tomato sauce, mozzarella chees, basil, olive oil',
					image: 'https://cache3.youla.io/files/images/780_780/5c/c1/5cc1816080e08e16160b9da3.jpg',
					cost: 275,
				},
				{
					id: 3,
					name: 'Prosciutto and salami',
					description: 'Mozzarella cheese, tomato sauce, Parma cured ham, spicy salami sausage',
					image: 'https://fermer.blog/media/res/1/1/9/7/9/3/119793.pxm6po.840.jpg',
					cost: 310,
				},
			]}};
		}
	} catch(e) {
		console.log(e);
		return {error:{message:'Failed to send request'}};
	}
}
