document.getElementById('counter').innerHTML = "hello2";

var counter = document.getElementById('counter');

counter.innterHTML = "hello2";

counter.innerHTML = "counter text";

window.onscroll = funcution () {

fromTop = window.pageYOffset;

conole.log(fromTop);

counter.style.top = 100 + fromTop + "px";

if(fromTop > 1000) {
        counter.innerHTML = "MORE THAN 1000 leagues";
        counter.style.backgroundColor="red";
} else {counter.innerHTML ="counter text";
        counter.style.backgroundImage+}
}
