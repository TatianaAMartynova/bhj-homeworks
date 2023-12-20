document.addEventListener('DOMContentLoaded', function () {
    const fontSizeControls = document.querySelectorAll('.font-size');
    const textColorControls = document.querySelectorAll('.text_color');
    const bgColorControls = document.querySelectorAll('.bg_color');
    const book = document.getElementById('book');

    function updateControlState(controls, activeControl) {
        controls.forEach(function (control) {
            control.classList.remove('font-size_active', 'text_color_active', 'bg_color_active');
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

            textColorControls.forEach(function (control) {
                control.classList.remove('text_color_active');
            });

            const selectedColor = control.dataset.color;

            control.classList.add('text_color_active');

            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

            if (selectedColor === 'black') {
                book.classList.add('book_color-black');
            } else if (selectedColor === 'gray') {
                book.classList.add('book_color-gray');
            } else if (selectedColor === 'whitesmoke') {
                book.classList.add('book_color-whitesmoke');
            }
        });
    });

    bgColorControls.forEach(function (control) {
        control.addEventListener('click', function (event) {
            event.preventDefault();

            bgColorControls.forEach(function (control) {
                control.classList.remove('bg_color_active');
            });

            const selectedColor = control.dataset.color;

            control.classList.add('bg_color_active');

            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

            if (selectedColor === 'black') {
                book.classList.add('book_bg-black');
            } else if (selectedColor === 'gray') {
                book.classList.add('book_bg-gray');
            } else if (selectedColor === 'white') {
                book.classList.add('book_bg-white');
            }
        });
    });
});
