import Glide from "@glidejs/glide";

const glide = document.querySelector(".glide");
 new Glide(".glide", {
    peek: 50,
    perView: 2,
    type: "carousel"
  }).mount();