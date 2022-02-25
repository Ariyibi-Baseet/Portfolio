
const Icon = document.getElementById('icon');
const NavLinks = document.getElementById('navLinks');

Icon.addEventListener('click',() => {
NavLinks.classList.toggle("max-sm:hidden");
NavLinks.classList.add('max-sm:flex','max-sm:flex-col','max-sm:text-left','max-sm:absolute','max-sm:right-0','max-sm:top-0','max-sm:w-full','max-sm:min-h-screen','max-sm:bg-deep_blue','max-sm:border','max-sm:items-center' ,'max-sm:justify-center');

//     if(NavLinks.style.display == "flex")
// {
//     NavLinks.removeAttribute('class', 'max-sm:hidden');
//     NavLinks.classList.add('max-sm:block','max-sm:pl-9','max-sm:absolute','max-sm:left-0','max-sm:w-full','max-sm:mt-64','max-sm:border','max-sm:bg-deep_blue');
// }else{
//     NavLinks.setAttribute('class', 'max-sm:hidden');
// }
// }
})