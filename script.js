var typed = new Typed(".edit", {
    strings: ["morning", "afternoon", "evening"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var searchForm = document.querySelector(".search-form");
document.querySelector("#search-item").onclick = () => {
    searchForm.classList.toggle('active');
    cartItemData.classList.remove('active');
}
var cartItemData = document.querySelector(".cart-items-data");
document.querySelector("#cart-item").onclick = () => {
    cartItemData.classList.toggle('active');
    searchForm.classList.remove('active');
}
var home1 = document.getElementById("home1");
var home = document.getElementById("home");
home.onclick = function() {
    home1.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('image.jpeg')";
}
