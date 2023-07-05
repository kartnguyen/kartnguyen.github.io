window.addEventListener('scroll', function(e) {
    if(window.pageYOffset > 20) {
        document.querySelector('header').classList.add('fixed-top')
        document.querySelector('.back-to-top').classList.add('show','animated','infinite','headShake')
    }
    else {
        document.querySelector('header').classList.remove('fixed-top')
        document.querySelector('.back-to-top').classList.remove('show','animated','infinite','headShake')
    }
})


let template = document.body;

function handle_mobile_nav() {
	let btn = template.querySelector('.navbar-dropdown'),
			nav = template.querySelector('header nav'),
			overlay = document.createElement('div');
			overlay.classList.add('overlay');
	
	if (btn) {
		btn.addEventListener('click', (e) => {
			template.classList.add('overflow-hidden');
			template.querySelector('header .row').appendChild(overlay);
			nav.className = 'show animated bounceInLeft';
		});
		
		overlay.addEventListener('click', (e) => {
			template.classList.remove('overflow-hidden');
			overlay.remove();
			nav.className = 'show animated bounceOutLeft';
			setTimeout(() => {
				nav.className = '';
			}, 300);
		});
	}
}
handle_mobile_nav();