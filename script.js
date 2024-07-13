const MAin = document.querySelector("#main")
const images = document.querySelector(".imgs")
const img = document.querySelectorAll(".imgs img")

images.addEventListener("click",(event)=>{
    //console.log(event);
    const clickedimageurl  = event.target.src;
     main.src = clickedimageurl;
     main.classList.add("fade-In");
     setTimeout(()=>{
        main.classList.remove("fade-In")
     },600)
})

