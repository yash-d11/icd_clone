var exp =  document.querySelector("#expand")
var flag = true;
exp.addEventListener("click",function(){
    if(flag==true){
    document.querySelector("#first #box img").style.scale = 1.5
    flag = false
    
    exp.style.left = "95%"
    exp.style.bottom = "190px"
    exp.innerHTML = '<i class="ri-close-line"></i>'
    }
    else{
        flag = true;
        exp.innerHTML = '<i class="ri-expand-up-down-fill">'
        exp.style.left = "71%"
        exp.style.bottom = "65px"
        document.querySelector("#first #box img").style.scale = 1
    }
})
var btn = document.querySelector("#fourth #joinch")
btn.addEventListener("click",function(){
    btn.innerHTML = "Applied !"
})

// var swiper = new Swiper(".review1", {
//     slidesPerView: "auto",
//     pagination: {
//       el: ".swiper-pagination",
//       type: "fraction",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
