import { Card } from "./productCard.js";

export class uiComponents {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.filteredProducts = [];
        this.products = [];  
    }

    renderProduct() {
        this.products.forEach(product => {
             const card = new Card(product)
            const cardElement = card.createCard();
            this.container.appendChild(cardElement);
        });
    }
}