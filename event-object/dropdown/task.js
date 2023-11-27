document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');

        valueElement.addEventListener('click', function () {
            listElement.classList.toggle('dropdown__list_active');
        });

        listElement.addEventListener('click', function (event) {
            if (event.target.classList.contains('dropdown__link')) {
                valueElement.textContent = event.target.textContent;
                listElement.classList.remove('dropdown__list_active');
            }
        });

        listElement.addEventListener('click', function (event) {
            if (event.target.tagName === 'A') {
                event.preventDefault();
            }
        });

        document.addEventListener('click', function (event) {
            if (!dropdown.contains(event.target)) {
                listElement.classList.remove('dropdown__list_active');
            }
        });
    });
});