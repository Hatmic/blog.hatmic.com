document.addEventListener('DOMContentLoaded', function () {
    var blogCards = document.querySelectorAll('.card');
    blogCards.forEach(function (card) {
        card.addEventListener('click', function () {
            var cardId = card.getAttribute('data-card-id');
            localStorage.setItem('selectedCardId', cardId);
            window.location.href = 'blog/blog.html';
        });
    });
});