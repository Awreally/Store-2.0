export class SortCategory {
    filter(products, main, sub) {

      console.log("FILTER CALLED:", main, sub);

        if (main === 'men') {
            return products.filter(product =>
                product.category === "men's clothing"
            );
        }

        return products;
    }
}
