const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const show = $(".btn-rev");
const des = $(".btn-des");
show.addEventListener("click",function() {
    if($(".review").classList.contains("hidden")){
        $(".review").classList.add("show");
        $(".des").classList.add("hidden");
        show.classList.add("active");
        $(".review").classList.remove("hidden");
        $(".des").classList.remove("show");
        des.classList.remove("active");
    }
});

des.addEventListener("click",function() {
    if($(".des").classList.contains("hidden")){
        $(".des").classList.remove("hidden");
        $(".review").classList.remove("show");
        show.classList.remove("active");
        $(".des").classList.add("show");
        $(".review").classList.add("hidden");
        des.classList.add("active");
    }
});

const amount = $(".input-qty");
const amountValue = amount.value;

let handleMinus = () => {
    if($(".input-qty").value>1){
        $(".input-qty").value--;
        let product = {
            qty: $(".input-qty").value,
            price: $('#price').innerHTML
        }
        localStorage.setItem('quantity',JSON.stringify(product));
    }
}


let handlePlus = () => {
    $(".input-qty").value++;
    let product = {
        qty: $(".input-qty").value,
        price: $('#price').innerHTML
    }
    localStorage.setItem('quantity',JSON.stringify(product));
}



function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = (offsetX / zoomer.offsetWidth) * 100
    y = (offsetY / zoomer.offsetHeight) * 100
    zoomer.style.backgroundPosition = x + "% " + y + "%";
};


$(".loop").addEventListener("click",function() {
    if($(".fullscreen_img").classList.contains("hidden")){
        $(".fullscreen_img").classList.add("show");
    }
});

$(".overlay").addEventListener("click",function() {
    if($(".fullscreen_img").classList.contains("show")){
        $(".fullscreen_img").classList.add("hidden");
        $(".fullscreen_img").classList.remove("show");
    }
});

let img = $$(".small-img img");

function setOpacity(event) {
    img.forEach(function(image) {
      image.style.opacity = 0.5;
      $(".small-img img").classList.remove("opa");
    });

    var selectedImage = event.target;
    selectedImage.style.opacity = 1;

    let x = $(".big-img");
    x.style.backgroundImage = "url('"+selectedImage.src+"')";

    let xv = $(".main-img");
    xv.src = selectedImage.src;
    
    let xvx = $(".img img");
    xvx.src = selectedImage.src;
}
    img.forEach(function(image) {
    image.addEventListener('click', setOpacity);
});

// Nút back to top JS

window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY >= 200) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  


//   Shoping cart

let shopingCart = $$(".btn-add");

let number = 0;
let span = document.querySelector('.a-icons span')

document.querySelector('.btn-add').addEventListener('click',function () {
    span.classList.remove('hidden');
    number+=1;
    span.innerHTML = number;
    let product = {
        qty: $(".input-qty").value,
        price: $('#price').innerHTML
    }
    localStorage.setItem('quantity',JSON.stringify(product));
})
