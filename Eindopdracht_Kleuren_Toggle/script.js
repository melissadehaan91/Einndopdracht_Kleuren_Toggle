let $hamburger = document.getElementById('hamburger');
$hamburger.addEventListener("click", toggleMenu);
function toggleMenu(){
    let $listDots = document.querySelector('.list-dots');
    if ($listDots.style.display == 'block'){
        $listDots.style.display = 'none';      
    } else {$listDots.style.display = 'block';}
}
function toggleColor(e){
    let body = document.body;
    let color = e.target.classList[1];
    body.className = color;
    toggleMenu();
}

let btns = document.querySelectorAll('.list-dots li a');
for (let btn of btns){
    btn.addEventListener("click", toggleColor);
}

function keyChange(e){
    let key = parseInt(e.key);
    
    if (!Number.isInteger(key)){ return;}
    if (--key < 0 || key >= btns.length){return;}
        
    btns[key].click();
}
document.addEventListener("keydown", keyChange);

