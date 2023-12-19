document.addEventListener('DOMContentLoaded', function () {
    const fontSizeControls = document.querySelectorAll('.font-size');
    const textColorControls = document.querySelectorAll('.text-color');
    const bgColorControls = document.querySelectorAll('.background-color');
    const book = document.getElementById('book');

    function updateControlState(controls, activeControl) {
        controls.forEach(function (control) {
            control.classList.remove('font-size_active', 'text-color_active', 'background-color_active');
        });
        activeControl.classList.add(activeControl.dataset.controlClass + '_active');
    }

    function applyStyle(control, styleClass) {
        book.classList.remove(styleClass + '-active');
        book.classList.add(control.dataset.controlClass);
    }

    fontSizeControls.forEach(function (control) {
        control.addEventListener('click', function (event) {
            event.preventDefault();

            fontSizeControls.forEach(function (control) {
                control.classList.remove('font-size_active');
            });

            control.classList.add('font-size_active');

            const selectedSize = control.dataset.size;

            book.classList.remove('book_fs-small', 'book_fs-big');

            if (selectedSize === 'small') {
                book.classList.add('book_fs-small');
            } else if (selectedSize === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });

    textColorControls.forEach(function (control) {
        control.addEventListener('click', function (event) {
            event.preventDefault();
            updateControlState(textColorControls, control);
            applyStyle(control, 'book_color');
        });
    });

    bgColorControls.forEach(function (control) {
        control.addEventListener('click', function (event) {
            event.preventDefault();
            updateControlState(bgColorControls, control);
            applyStyle(control, 'book_bg');
        });
    });
});