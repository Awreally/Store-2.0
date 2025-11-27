export class Card {
    constructor({ title, description, image, price, primaryAction}) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.body = body;
        this.image = images[0];
        this.primaryAction = primaryAction;
    }
    createCard() {
        const articleCard = document.createElement('article');
        articleCard.className = 'card';

        articleCard.innerHTML = `
            <img class="cardImg" ${this.image}>
        `;
    }

}