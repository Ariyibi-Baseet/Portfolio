// get toggle mode btn
// alert()
const ToggleMode = document.getElementById('toggleMode');
const Head = document.all[0];

ToggleMode.addEventListener('click', ()=> {
    if(ToggleMode.checked === true){
        Head.setAttribute('class', 'dark');
    }else{
        Head.removeAttribute('class','dark');
    }
})