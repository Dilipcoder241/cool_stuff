let cursor = document.querySelector('.cursor');
let imgdiv = document.querySelector('.imgdiv');
let img = document.querySelector('.imgdiv img');

document.addEventListener('mousemove' ,(dets)=>{
    cursor.style.top = dets.clientY + 'px';
    cursor.style.left = dets.clientX + 'px';
})


img.addEventListener('mousemove' ,(dets)=>{
    let rotx = 75-dets.clientX/10;
    console.log(rotx);
    img.style.transform = `rotateX(${rotx}deg)  rotateY(${Math.abs(rotx)}deg)`;
})

img.addEventListener('mouseleave',()=>{
    setTimeout(() => {
        img.style.transform = `rotateX(0deg)  rotateY(0deg)`;
    }, 500);
})
