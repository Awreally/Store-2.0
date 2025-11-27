export class GetApiData {
    constructor(url = 'https://api.escuelajs.co/api/v1/products') {
        this.url = url;
        this.products = [];
    }
    async getData() {
    try {
        const res = await fetch(this.urlrl);
        if (!res.ok) throw new Error('Kunde inte hämta produkter');
        this.products = await res.json();
        return this.products;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
}