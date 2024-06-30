// function navscroll(){
//     let nav =document.getElementById("navbar")

//     if(nav.style.display!="block"){
//         nav.style.display="none"
//     }
//     else{
//         nav.style.display="block"
//     }
// }


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.scrollY;
// window.onscroll = function() {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// }



// var lastScrollTop;

// navbar = document.getElementById('navbar');

// window.addEventListener('scroll',function(){

// var scrollTop = window.scrollY || document.documentElement.scrollTop;


// if(scrollTop > lastScrollTop){ //if it will be greater than the previous
// navbar.style.top='-80px';

// }

// else{
// navbar.style.top='0';
// }

// lastScrollTop = scrollTop; //New Position Stored
// })