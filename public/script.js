
const Icon = document.getElementById('icon');
const NavLinks = document.getElementById('navLinks');

Icon.addEventListener('click',() => {
NavLinks.classList.toggle("max-sm:hidden");
NavLinks.classList.add('max-sm:block','max-sm:pl-9','max-sm:absolute','max-sm:left-0','max-sm:w-full','max-sm:mt-64','max-sm:bg-deep_blue');

//     if(NavLinks.style.display == "flex")
// {
//     NavLinks.removeAttribute('class', 'max-sm:hidden');
//     NavLinks.classList.add('max-sm:block','max-sm:pl-9','max-sm:absolute','max-sm:left-0','max-sm:w-full','max-sm:mt-64','max-sm:border','max-sm:bg-deep_blue');
// }else{
//     NavLinks.setAttribute('class', 'max-sm:hidden');
// }
// }
})