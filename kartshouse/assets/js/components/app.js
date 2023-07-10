let app = document.querySelector('main');

async function init_app() {
	let page = await import('../pages/product.js');
	let render = await page.student_page();
	app.appendChild(await render);
}

document.querySelector('.products').addEventListener('click', function(e) {
    app.innerHTML = '';
  init_app();
})