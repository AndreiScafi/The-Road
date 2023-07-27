/* Card - Navigation - Button */

const navButton = document.querySelectorAll('.navigation-button');

Array.from(navButton).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change');
    }
})

/* End of Card - Navigation - Button */