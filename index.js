let btn = document.querySelector('button');
let p = document.querySelector('p');
let body = document.querySelector('body');

btn.addEventListener('click',function (){
    let rcolor = getrandom();
    p.innerText=rcolor;
    body.style.backgroundColor=rcolor;
})

function getrandom(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}

