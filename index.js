let bar = document.getElementById("bar");
let nav = document.getElementById("navbar")
let close = document.getElementById("close")

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}



