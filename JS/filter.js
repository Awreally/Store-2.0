export class SortCategory {
  constructor(products) {
    this.subCategoryMap = this.generateDynamicSubCategories(products);
  }
  filter(products, main, sub) {
    console.log("FILTER:", main, sub);

    let filtered = products;

    if (main === "men") {
      filtered = filtered.filter((p) => p.category === "men's clothing");
    }

    if (main === "women") {
      filtered = filtered.filter((p) => p.category === "women's clothing");
    }

    if (main === "jewelery") {
        filtered = filtered.filter((p) => p.category === "jewelery");
    }

    if (main === "electronics") {
        filtered = filtered.filter((p) => p.category === "electronics");
    }

    if (sub && this.subCategoryMap[sub]) {
      const keywords = this.subCategoryMap[sub];

      filtered = filtered.filter((product) =>
        keywords.some((keyword) =>
          product.title.toLowerCase().includes(keyword)
        )
      );
    }

    return filtered;
  }

  autoDetectKeywords(products) {
    const stopWords = [
      "men",
      "mens",
      "women",
      "womens",
      "for",
      "with",
      "the",
      "a",
      "an",
      "of",
      "and",
      "casual",
      "cotton",
      "winter",
    ];

    const keywords = new Set();

    products.forEach((product) => {
      if (!product.title) return;

      const words = product.title
        .toLowerCase()
        .replace(/[^a-z\s]/g, "")
        .split(" ")
        .filter((word) => word.length > 2)
        .filter((word) => !stopWords.includes(word));

      words.forEach((word) => keywords.add(word));
    });

    return Array.from(keywords);
  }

  generateDynamicSubCategories(products) {
    const detectedWords = this.autoDetectKeywords(products);

    const keywordGroups = {
      jackets: ["jacket", "coat", "parka"],
      pants: ["pant", "trouser", "jean"],
      shoes: ["shoe", "boot", "sneaker"],
      shirts: ["slim", "shirt", "short", "tee", "tshirt"],
      bags: ["bag", "backpack", "purse", "pack"],
      bracelet: ["bracelet", "ring", "earrings"],
      ring: ["micropave", "princess"],
      earring: ["rose"],
      harddrive: ["external"],
      ssd: ["ssd"],
      ps4: ["playstation"],
      acer: ["ips"],
      gaming: ["samsung"],
    };

    const result = {};

    for (const category in keywordGroups) {
      const groupWords = keywordGroups[category];

      const matches = detectedWords.filter((word) =>
        groupWords.some((gw) => word.includes(gw))
      );

      if (matches.length > 0) {
        result[category] = matches;
      }
    }

    return result;
  }
}
