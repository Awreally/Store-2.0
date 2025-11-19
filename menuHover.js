const menuNav = document.querySelector('.navmenu');


export function menuHover() {
    const liMenu = document.querySelectorAll('.navmenu > li');

    liMenu.forEach(li => {
        const dropdown = li.querySelector('.dropdown');
        if (!dropdown) return;
        li.addEventListener('mouseenter', () => {
            dropdown.classList.remove('hidden');
        });
        li.addEventListener('mouseleave', () => {
            dropdown.classList.add('hidden');
        });
    });
}
        