export class Card {
  constructor({ title, description, image, price, primaryAction }) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.primaryAction = primaryAction;
  }
  createCard() {
    const articleCard = document.createElement("article");
    articleCard.className = "card";
    
    const imgCard = document.createElement("img");
    imgCard.className = "imgcard";
    imgCard.src = this.image;
    articleCard.appendChild(imgCard);

    const titleCard = document.createElement("h2");
    titleCard.className = "titlecard";
    titleCard.textContent = this.title;
    articleCard.appendChild(titleCard);

    const priceCard = document.createElement("p");
    priceCard.className = "pricecard";
    priceCard.textContent = `Price: ${this.price} $`;
    articleCard.appendChild(priceCard);

    return articleCard;
  }
}
