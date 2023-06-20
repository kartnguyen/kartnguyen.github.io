let logo = document.querySelector(".logo img");

logo.addEventListener("mousemove", () => {
  logo.setAttribute("src", "images/5ff799656e9f7150a1ceb0e6_s logo copy 5.png");
});
logo.addEventListener("mouseout", () => {
  logo.setAttribute("src", "images/60baff5fcc93ec0fda8a19ba_s logo copy 3.png");
});

let submit = document.querySelector(".submit");
let user_name = document.querySelector("#name");

submit.addEventListener("click", () => {
  let toast = document.createElement("div");
    toast.classList.add('sub');
    toast.innerHTML = `
            <h4>Name can't be blank</h4>
        `;
  if (!user_name.value) {
    user_name.classList.add("warnning");
    document.querySelector(".name").appendChild(toast);
    user_name.focus();
    return;
  } else {
    user_name.classList.remove("warnning");
    if (document.querySelector('.name div')) {
      document.querySelector('.name div').remove();
    }
  }
  checkEmail("#email");
});

function checkEmail(params) {
  let email = document.querySelector(params);
  if (!email.value) {
    email.classList.add("warnning");
    let toast = document.createElement("div");
    toast.classList.add('sub');
    toast.innerHTML = `
            <h4>Email can't be blank</h4>
        `;
    document.querySelector(".email").appendChild(toast);
    email.focus();
    return;
  }else {
    email.classList.remove("warnning");
    if (document.querySelector('.email div')) {
      document.querySelector('.email div').remove();
    }
  }
  
  var letter3 =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!email.value.match(letter3)) {
    email.classList.add("warnning");
    let toast = document.createElement("div");
    toast.classList.add('sub');
    toast.innerHTML = `
            <h4>Email is invalid</h4>
        `;
    document.querySelector(".email").appendChild(toast);
    email.focus();
    return;
  }
  else{
    email.classList.remove("warnning");
    if (document.querySelectorAll('.email div')) {
      document.querySelectorAll('.email div').forEach((item) => {
        item.remove();
      });
    }
    document.querySelector('#mess').focus();
  }
}

document.querySelector(".icon").addEventListener("click", function () {
  document.querySelector(".nav_mobile").classList.toggle("hidden");
});
