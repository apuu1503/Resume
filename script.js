const hoverTriggers = document.querySelectorAll('.hover-trigger');

hoverTriggers.forEach((hoverTrigger) => {
    const hiddenDiv = hoverTrigger.querySelector('.hidden-div');

    hoverTrigger.addEventListener('mouseover', () => {
        hiddenDiv.style.display = 'block';
    });

    hoverTrigger.addEventListener('mouseout', () => {
        hiddenDiv.style.display = 'none';
    });
});