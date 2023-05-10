


// Code pour pouvoir ouvrir seulement 2 cartes.

const cards = document.querySelectorAll('.flip-card-inner');
let card = 0;
let flippedCard = "";


cards.forEach((cardFlip) => {
    cardFlip.addEventListener('click', function () {
        if (card < 2) {
            cardFlip.classList.add('is-flipped');
        }

    })
});

// Code pour avoir des paires de cartes identiques placées aléatoirement.

let cardBack = document.querySelectorAll(".flip-card-back");
let cardList = [0, 1, 2, 3];

for (i = 0; i < 2; i++) {

    cardBack[cardList[0]].innerHTML += "<img src='https://picsum.photos/200/300?random=" + i + "'>";
    cardList.splice(0, 1);

    let a = Math.floor(Math.random() * cardList.length);
    cardBack[cardList[a]].innerHTML += "<img src='https://picsum.photos/200/300?random=" + i + "'>";
    cardList.splice(a, 1);
    console.log(i);
    console.log(cardList[a]);
}

console.log(cardList);