const body = document.body

setInterval(rainFall, 10);

function rainFall(){
    const waterDrop = document.createElement('i');
    waterDrop.classList.add('fas');
    waterDrop.classList.add('fa-tint');
    waterDrop.style.fontSize = Math.random() * 7 + 'px'
    waterDrop.style.animationDuration = Math.random() * 2 + 's';
    waterDrop.style.opacity = Math.random() * 0.3;
    waterDrop.style.left = Math.random() * window.innerWidth + 'px'

    body.appendChild(waterDrop);

    setTimeout(() => {
        waterDrop.remove();
    }, 6000)

}