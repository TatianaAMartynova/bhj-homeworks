document.addEventListener('DOMContentLoaded', function () {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(function (rotator) {
        const rotatorElements = rotator.querySelectorAll('.rotator__case');

        setInterval(function () {
          rotateText(rotatorElements);
        }, 1000);
    });

    function rotateText(rotatorElements) {
        const activeElement = Array.from(rotatorElements).find(element => element.classList.contains('rotator__case_active'));
        const nextElement = activeElement.nextElementSibling || rotatorElements[0];

        activeElement.classList.remove('rotator__case_active');
        nextElement.classList.add('rotator__case_active');
        }
    });