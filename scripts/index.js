var time = 4000,
    currentImageIndex = 0,
    images = document.querySelectorAll('#banner img'),
    max = images.length;

function nextImage(){
    images[currentImageIndex].classList.remove('ativo');

    currentImageIndex++;

    if(currentImageIndex >= max){
        currentImageIndex = 0;
    }

    images[currentImageIndex].classList.add('ativo');
}

function start(){
    setInterval(()=> {
        nextImage()
    },time);
}

window.addEventListener("load", start)

