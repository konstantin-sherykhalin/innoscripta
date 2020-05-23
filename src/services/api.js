const address = 'https://.../api/v1';

export async function API(method,data = {}) {
	try {
		const res = await fetch(address+method,{
			method: 'POST',
			mode: 'no-cors',
			crossDomain: true,
			headers: {
				'Accept':		'application/json',
				'Content-Type':	'application/json',
			},
			body: JSON.stringify(data),
		});

		// await new Promise(resolve => setTimeout(resolve,1000));

		if(res.status == 200) {
			// console.log(await res.text());
			let data = await res.json();
			// console.log(data);
			if(data.response)	return {response:data.response};
			if(data.error)		return {error:data.error};
		} else if(res.status == 500) {
			return {error:{code:res.status,message:'Сервер не доступен'}};
		} else {
			console.log(res);
			return {error:{code:res.status,message:'Проблемы со связью'}};
		}
	} catch(e) {
		console.log(e);
		return {error:{message:'Не удается выполнить запрос'}};
	}
}
