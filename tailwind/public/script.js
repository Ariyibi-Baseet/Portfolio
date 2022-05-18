
const Icon = document.getElementById('icon');
const NavLinks = document.getElementById('navLinks');
const CloseIcon = document.getElementById('closeIcon');

// function to toggle navlinks on mobile devices (open modal)
Icon.addEventListener('click',() => {
NavLinks.classList.toggle("max-sm:hidden");
NavLinks.classList.add('max-sm:flex','max-sm:flex-col','max-sm:text-left','max-sm:absolute','max-sm:right-0','max-sm:top-0','max-sm:w-full','max-sm:min-h-screen','max-sm:bg-deep_blue','max-sm:items-center' ,'max-sm:justify-center');
})

// function to close navlinks modal
CloseIcon.addEventListener('click',() => {
    NavLinks.classList.add("max-sm:hidden");
})