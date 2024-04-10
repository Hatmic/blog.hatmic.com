document.addEventListener('DOMContentLoaded', function () {
    var selectedCardId = localStorage.getItem('selectedCardId');
    if (selectedCardId) {
        document.getElementById('blogFrame').src = selectedCardId + '.html';
    }
    localStorage.removeItem('selectedCardId');
});