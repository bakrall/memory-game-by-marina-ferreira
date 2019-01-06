const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firsCard, secondCard;

function flipCard() {
	this.classList.toggle('flip');

	if (!hasFlippedCard) {
		//first click
		hasFlippedCard = true;
		firstCard = this;
	} else {
		//second click
		hasFlippedCard = false;
		secondCard = this;

		checkForMatch();
	}
}

function checkForMatch() {
	if (firstCard.dataset.framework === secondCard.dataset.framework) {
		disableCards();
	} else {
		unflipCards();
	}
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
	}, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));
