/* DarkMode Toggle */
const checkbox = document.querySelector('.toggle-checkbox');
const body = document.querySelector('body');

checkbox.addEventListener('change', () => {
    if (body.classList.contains('lightMode')) {
        body.classList.remove('lightMode');
        setDarkModeLocalStorage()
    } else {
        body.classList.add('lightMode');
        setDarkModeLocalStorage()
    }
})

/* Localstorage Save Darkmode */
let darkmode = localStorage.getItem('darkmode');

// Check what mode user was on last visit
if (darkmode === 'enabled') {
    body.classList.remove('lightMode');
} else {
    body.classList.add('lightMode');
    checkbox.checked = true;
}

function setDarkModeLocalStorage() {
    if (body.classList.contains('lightMode')) {
        localStorage.setItem('darkmode', null)
    } else {
        localStorage.setItem('darkmode', 'enabled')
    }
}

setDarkModeLocalStorage();