const events = document.querySelectorAll('.event');
const popup = document.getElementById('popup');
const popupYear = document.getElementById('popup-year');
const popupDescription = document.getElementById('popup-description');

events.forEach(event => {
    event.addEventListener('mouseover', () => {
        const year = event.getAttribute('data-year');
        const description = event.querySelector('.description').textContent;
        showPopup(year, description);
    });

    event.addEventListener('mouseout', () => {
        hidePopup();
    });
});

function showPopup(year, description) {
    popupYear.textContent = year;
    popupDescription.textContent = description;
    popup.style.display = 'block';
}

function hidePopup() {
    popup.style.display = 'none';
}

function closePopup() {
    hidePopup();
}
