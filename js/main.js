window.onload = function () {

    const body = document.querySelector('body');
    const nav2 = document.querySelectorAll('.nav-2');

    body.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('nav-1__item-link')) {
            let item = e.target.parentElement,
            sub = item.querySelector('.nav-2');

            for (let i=0; i < nav2.length; i++) {
                nav2[i].classList.remove('active');
            }
            sub.classList.add('active');

        }

    });

};