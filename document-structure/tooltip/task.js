function showTooltip(element) {
    var tooltip = document.querySelector('.tooltip');
    tooltip.innerText = element.getAttribute('title');
    tooltip.classList.add('active');

    document.addEventListener('click', function hideTooltip(e) {
        if (!element.contains(e.target) && !tooltip.contains(e.target)) {
            tooltip.classList.remove('active');
            document.removeEventListener('click', hideTooltip);
        }
    });
}