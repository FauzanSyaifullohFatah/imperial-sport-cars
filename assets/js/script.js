// EXPIRE DATE GIFT
const boxGift = document.getElementsByClassName("box-gift")[0];
const timer = document.querySelectorAll(".timer");
var giftExpiryDate = new Date("2026-02-01").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = giftExpiryDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (days < 10){days = "0" + days;}
    if (hours < 10){hours = "0" + hours;}
    if (minutes < 10){minutes = "0" + minutes;}
    if (seconds < 10){seconds = "0" + seconds;}

    var boxDays = timer[0];
    var boxHours = timer[1];
    var boxMinutes = timer[2];
    var boxSeconds = timer[3];

    boxDays.innerHTML = days;
    boxHours.innerHTML = hours;
    boxMinutes.innerHTML = minutes;
    boxSeconds.innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        boxGift.innerHTML = '<img src="assets/img/Logo-ISC.png" alt="Logo Imperial Sport Cars" width="200px">';
        boxGift.style.width = "100%";
    }
}, 1000);
// CARS SELLECTOR
const cardCars = document.querySelectorAll(".card");
const sellectCars = document.querySelectorAll(".select-cars");
const carsTrack = document.querySelector(".cars-track");
let indexCars = 0;
sellectCars.forEach(car => {
    car.onclick = function(){
        if (this.id == "arrow-right"){
            indexCars++;
        } else {
            indexCars--;
        }

        if (indexCars >= cardCars.length){
            indexCars = 0;
        }
        if (indexCars < 0){
            indexCars = (cardCars.length - 1);
        }
        carsTrack.style.transform = `translateX(-${indexCars * 100}%)`;
    }
})
// BUTTON ACTIVE NAVIGATION
const navigation = document.querySelectorAll(".navigation");
navigation.forEach(btn => {
    btn.onclick = function(){
        navigation.forEach(item => {
            item.classList.remove("nav-active");
        });
        this.classList.add("nav-active");
    }
})