import {
	api_url,
	end_point,
	fetch_data
} from '../components/helper.js';

export async function student_page(params) {
	let get_student = {
		api_url: api_url,
		end_point: end_point.student,
		method: 'GET',
		async callback(params) {
			await render_student(params);
		}
	}
	let template = document.createElement('section');
	template.className ='products';
	template.innerHTML = `
	<div class="container"></div>
	`;

	async function render_student(params) {
		template.querySelector('.container').innerHTML = '';
		for(let student of params) {
			let {id, image, name, content, quantity, price, subtitle} = student;

			let div = document.createElement('div');
			div.classList.add('item');
			div.innerHTML = `
			<div>
			<div class="image">
				<div class="img" style="background-image: url(${image[0]});"></div>
			</div>
			<div class="about">
				<h3 class="item_name">${name}</3>
					<p class="sub_about">${content}</p>
					<span class="money">${subtitle} </span>
					<span class="price">${price}</span>
			</div>
			</div>
			`;

			template.querySelector('.container').appendChild(div);
		}
	}
	
	await fetch_data(get_student);
	
	return template;
}