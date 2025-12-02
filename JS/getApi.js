export class GetApiData {
    constructor(url = 'https://fakestoreapi.com/products') {
        this.url = url;
        this.products = [];
    }
    async getData() {
    try {
        const res = await fetch(this.url);
        if (!res.ok) throw new Error('Kunde inte hämta produkter');
        this.products = await res.json();
        return this.products;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
}