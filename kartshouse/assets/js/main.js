let template = document.body;

function handle_mobile_nav() {
  let btn = template.querySelector("header .navbar-toogle"),
    nav = template.querySelector("header .navbar-collapse"),
    overlay = document.createElement("div");
  overlay.classList.add("overlay");

  if (btn) {
    btn.addEventListener("click", (e) => {
      template.querySelector("header").appendChild(overlay);
      nav.classList.add("show", "fadeInLeft");
    });

    overlay.addEventListener("click", (e) => {
      overlay.remove();
      nav.classList.add("fadeOutLeft");
      setTimeout(() => {
        nav.className = "navbar-collapse";
      }, 300);
    });
  }
  nav.querySelector(".dropdown").addEventListener("click", function () {
    nav.querySelector(".dropdown-menu").classList.toggle("hidden");
  });
}
handle_mobile_nav();

$('.owl-carousel').owlCarousel({
    items:1,
    nav:true,
    lazyLoad:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
});

$('.fixed-top');
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('top');
        } else {
            $('.fixed-top').removeClass('top');
        }
    });
