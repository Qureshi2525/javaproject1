document.write("<center><h1>Yasir Rasheed CCO-118488 یاسر رشید </h1></center>")
document.write("<center><h1> JAVASCRIPT PROJECTS</h1></center>")
document.write(("<hr>"))
document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVASCRIPT PROJECTS</b></marquee>"))
document.write(("<hr>"))

// TWO BUTTON USE ON & OFF
function bulb_on(){
    document.getElementById('bulb').src='https://i.postimg.cc/6QyTynzr/bulb-on.png';
}
function bulb_off(){
    document.getElementById('bulb').src='https://i.postimg.cc/KjK1wL3c/bulb-off.png';
}

// ONE BUTTON USE ON OR OFF

let btn = document.getElementById('btn')
let img = document.getElementById('bulb')
btn.addEventListener('click',change)
function change(e){
    if (btn.textContent.includes('on')) {
        img.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png"
        btn.style.background = "green"
        btn.style.color = "white"
        btn.style.fontSize ="25px"
        btn.textContent ="Turn Off"
    }else{
        img.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png" 
        btn.textContent = "turn on"
        btn.style.background = "yellow"
        btn.style.color = "black"
        btn.style.fontSize ="20px"
    }
}

// Click the light bulb to turn on/off the light.

  function changeImage() {
    var image = document.getElementById('bulb');
    if (image.src.match("bulb-on")) {
      image.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    } else {
      image.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
    }
  }