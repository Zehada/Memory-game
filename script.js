


// Code pour pouvoir ouvrir seulement 2 cartes.

const cards = document.querySelectorAll('.flip-card-inner');
let card = 0;
let flippedCard = "";


cards.forEach((cardFlip) => {
    cardFlip.addEventListener('click', function () {
        if (card < 2) {
            cardFlip.classList.add('is-flipped');
        }
        card++;
    })
});



