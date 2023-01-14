var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Email JS
function validate(){
  let name = document.querySelector('.name')
  let email = document.querySelector('.email')
  let msg= document.querySelector('.message')
  let sendBtn = document.querySelector('.sendbtn')

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else if (email.value != /^\w+@\w+\.\w{2,4}$/i) {
      emptymailerror();
    } 
    else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

function sendmail(name,email,msg){
  emailjs.send("service_58taeem","template_3w38246",{
    from_name: email,
    to_name: name,
    message: msg,
    });
}

function emptyerror() {
  swal({
    title: "Oh No...!",
    text: "Wrong email address!",
    icon: "error",
  });
}
function emptymailerror() {
  swal({
    title: "Oh No..!",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function success() {
  swal({
  title: "Email sent successfully" ,
  text: "We try to reply in 24 hours",
  icon: "success",
});
}

// Header Background change on the scroll

let header = document.querySelector('.navbar')

window.addEventListener('scroll', ()=> {
  header.classList.toggle('navbar-active', window.scrollY > 0);
});
