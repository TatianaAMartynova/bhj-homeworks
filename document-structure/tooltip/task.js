document.addEventListener('DOMContentLoaded', function() {
    const tooltipElements = document.querySelectorAll('.has-tooltip');

    tooltipElements.forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();

            const tooltipText = element.getAttribute('title');

            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerText = tooltipText;

            document.body.appendChild(tooltip);

            const rect = element.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = rect.bottom + 'px';

            tooltip.classList.add('tooltip_active');

            function hideTooltipOnClickOutside(e) {
                if (!element.contains(e.target) && !tooltip.contains(e.target)) {
                    tooltip.classList.remove('tooltip_active');
                    document.removeEventListener('click', hideTooltipOnClickOutside);
                    document.body.removeChild(tooltip);
                }
            }

            document.addEventListener('click', hideTooltipOnClickOutside);
        });
    });
});
