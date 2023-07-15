const btn = document.getElementById('btnChange');
const html = document.querySelector('html');
const text = document.querySelector('body');

btn.addEventListener('click', () => {
    html.classList.toggle('reverse');
    text.classList.toggle('dark-text');
    for (let n of document.querySelectorAll(".btn-outline-light, .btn-outline-dark")) {
        n.classList.toggle("btn-outline-light");
        n.classList.toggle("btn-outline-dark");
    };

    for (let n of document.querySelectorAll(".bi-brightness-alt-high, .bi-brightness-alt-high-fill")) {
        n.classList.toggle("bi-brightness-alt-high");
        n.classList.toggle("bi-brightness-alt-high-fill");
    };
})