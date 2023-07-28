/* Navbar */

const container = document.querySelector('.container');
const openNavbarIcon = document.querySelector('.open-navbar-icon');
const closeNavbarIcon = document.querySelector('.close-navbar-icon');

openNavbarIcon.addEventListener('click', () => {
    container.classList.add('change');
});

closeNavbarIcon.addEventListener('click', () => {
    container.classList.remove('change');
});


/* Navbar links colors */

const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];
const navLink = document.querySelectorAll('.nav-link');

for (let i = 0; i < navLink.length; i++) {
    navLink[i].style.cssText = `background-color: ${colors[i]}`;
}

/* let i = 0;

Array.from(navLink).forEach((item) => {
    item.style.cssText = `background-color: ${colors[i++]}`
});
 */

/* End of Navbar links colors */
/* End of Navbar */


/* Card - Navigation - Button */

const navButton = document.querySelectorAll('.navigation-button');

Array.from(navButton).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change');
    }
})

/* End of Card - Navigation - Button */