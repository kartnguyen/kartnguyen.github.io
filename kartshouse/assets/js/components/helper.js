export const api_url = 'https://64a662ab096b3f0fcc7fa7e0.mockapi.io/';

export const end_point = {
	student: 'cake'
}

export async function fetch_data(params) {
	if (!params) {
		alert('Không tồn tại request');
		return false;
	}
	let {api_url, end_point, method, callback} = params;
	
	try {
		let res = await fetch(api_url + end_point, {
			method: method
		});

		let data = await res.json();
		await callback(data);
	}
	catch(error) {
		console.log(error)
	}
}