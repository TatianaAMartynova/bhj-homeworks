document.addEventListener('DOMContentLoaded', function () {
    const fontSizeControls = document.querySelectorAll('.font-size');
    const textColorControls = document.querySelectorAll('.book__control_color .color');
    const bgColorControls = document.querySelectorAll('.book__control_background .color');
    const book = document.getElementById('book');

    function applyStyle(control, styleClass) {

        const regex = new RegExp(`^${styleClass}_`);
        const classesToRemove = Array.from(book.classList).filter(className => regex.test(className));
        classesToRemove.forEach(className => book.classList.remove(className));

        book.classList.add(control.dataset.controlClass);
    }

    fontSizeControls.forEach(function (control) {
        control.addEventListener('click', function (event) {
            event.preventDefault();

            fontSizeControls.forEach(function (control) {
                control.classList.remove('font-size_active');
            });

            control.classList.add('font-size_active');

            applyStyle(control, 'book_fs');

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

            console.log(control.dataset)

            const selectedColor = control.dataset.textColor;
  
            textColorControls.forEach(function (otherControl) {
              otherControl.classList.remove('color_active');
              
              book.classList.remove(`book_color-${otherControl.dataset.textColor}`);
            });
  
            control.classList.add('color_active');
            
            const bookClassToAdd = `book_color-${selectedColor}`
            book.classList.add(bookClassToAdd);
        });
    });

    bgColorControls.forEach(function (control) {
        control.addEventListener('click', function (event) {
            event.preventDefault();
    
            console.log(control.dataset);
    
            const selectedColor = control.dataset.bgColor;

            bgColorControls.forEach(function (NextControl) {
                NextControl.classList.remove('color_active');

                book.classList.remove(`book_bg-${NextControl.dataset.bgColor}`);
            });
    
            control.classList.add('color_active');
            const bookClassToAdd = `book_bg-${selectedColor}`;
            book.classList.add(bookClassToAdd);
        });
    });
        });