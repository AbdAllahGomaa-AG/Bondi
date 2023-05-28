let switCher = document.querySelectorAll(".switCher li");
let imgs = document.querySelectorAll(".our-work  img")


//sroll
let button = document.querySelector(".btUp")
window.onscroll = function () {
    if (this.scrollY >= 100) {
        button.classList.add("show")
    }
    else {
        button.classList.remove("show")
    }
}

button.onclick = function () { 
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}



switCher.forEach((li) => {
    li.addEventListener("click", removeActive)
    li.addEventListener("click", mangeImage)
});

//remove active
function removeActive() {
    switCher.forEach((li) => {
        li.classList.remove("active")
        this.classList.add("active")
    })
}

//mange imgs
function mangeImage() {
    imgs.forEach((img) => {
        img.style.display = "none"
    });
    document.querySelectorAll(this.dataset.pic).forEach((img) => {
        img.style.display = "block"
    })
}





