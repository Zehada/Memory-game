
let grille = document.getElementById("grille");
let cardList = [];

document.getElementById("quatre").addEventListener("click", function () {

    document.getElementById("grille").style.cssText = "display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; width: 50%";
    document.getElementById("choix").style.display = "none";

    for (i = 0; i < 16; i++) {
        cardList.push(i);
    }

    for (i = 0; i < 8; i++) {
        document.getElementsByClassName("flip-card-back")[cardList[0]].innerHTML = "<img src='https://picsum.photos/200/300?random=" + i + "'>";
        cardList.splice(0, 1);

        let a = Math.floor(Math.random() * cardList.length);
        document.getElementsByClassName("flip-card-back")[cardList[a]].innerHTML += "<img src='https://picsum.photos/200/300?random=" + i + "'>";
        cardList.splice(a, 1);
    }
});



document.getElementById("six").addEventListener("click", function () {
    for (i = 0; i < 20; i++) {

        let flipCard = document.querySelector(".flip-card:empty");
        let flipCardInner = document.createElement("div");
        flipCardInner.className = "flip-card-inner";
        let flipCardFront = document.createElement("div");
        flipCardFront.className = "flip-card-front";
        let flipCardBack = document.createElement("div");
        flipCardBack.className = "flip-card-back";
        flipCard.appendChild(flipCardInner);
        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);
    }

    for (i = 0; i < 36; i++) {
        cardList.push(i);
    }

    for (i = 0; i < 18; i++) {
        document.getElementsByClassName("flip-card-back")[cardList[0]].innerHTML = "<img src='https://picsum.photos/200/300?random=" + i + "'>";
        cardList.splice(0, 1);

        let a = Math.floor(Math.random() * cardList.length);
        document.getElementsByClassName("flip-card-back")[cardList[a]].innerHTML += "<img src='https://picsum.photos/200/300?random=" + i + "'>";
        cardList.splice(a, 1);
    }
    document.getElementById("choix").style.cssText = "display: none";
    document.getElementById("grille").style.cssText = "display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 15% 15% 15% 15% 15% 15%; width: 80%";
});

document.getElementById("huit").addEventListener("click", function () {
    for (i = 0; i < 48; i++) {

        let flipCard = document.querySelector(".flip-card:empty");
        let flipCardInner = document.createElement("div");
        flipCardInner.className = "flip-card-inner";
        let flipCardFront = document.createElement("div");
        flipCardFront.className = "flip-card-front";
        let flipCardBack = document.createElement("div");
        flipCardBack.className = "flip-card-back";
        flipCard.appendChild(flipCardInner);
        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);
    }

    for (i = 0; i < 64; i++) {
        cardList.push(i);
    }

    for (i = 0; i < 32; i++) {
        document.getElementsByClassName("flip-card-back")[cardList[0]].innerHTML = "<img src='https://picsum.photos/200/300?random=" + i + "'>";
        cardList.splice(0, 1);

        let a = Math.floor(Math.random() * cardList.length);
        document.getElementsByClassName("flip-card-back")[cardList[a]].innerHTML += "<img src='https://picsum.photos/200/300?random=" + i + "'>";
        cardList.splice(a, 1);
    }
    document.getElementById("choix").style.cssText = "display: none";
    document.getElementById("grille").style.cssText = "display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 11% 11% 11% 11% 11% 11% 11% 11%; width: 90%";
});




const container = document.querySelectorAll('.flip-card');
let card = 0;
let flippedCard1 = "";
let flippedCard2 = "";
let imageA = "";
let imageB = "";
container.forEach((g) => {
    g.addEventListener("click", function () {

        function unflip() {
            flippedCard1.classList.remove('is-flipped');
            flippedCard2.classList.remove('is-flipped');
        }

        function retirer() {
            flippedCard1.style.display = "none";
            flippedCard2.style.display = "none";
        }

        if (document.querySelectorAll('.is-flipped').length < 2) {
            if (document.querySelectorAll('.is-flipped').length === 1) {
                flippedCard2 = g.querySelector('.flip-card-inner');
                flippedCard2.classList.add('is-flipped');
                imageB = flippedCard2.querySelector(".flip-card-back").querySelector("img");
                if (imageA.src !== imageB.src) {
                    setTimeout(unflip, 1500);
                } else if (imageA.src === imageB.src) {
                    setTimeout(retirer, 1000);
                    setTimeout(unflip, 1000);
                }
            }

            if (document.querySelectorAll('.is-flipped').length === 0) {
                flippedCard1 = g.querySelector('.flip-card-inner');
                flippedCard1.classList.add('is-flipped');
                imageA = flippedCard1.querySelector(".flip-card-back").querySelector("img");
            }
        }
    })
});

