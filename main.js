import { GetApiData } from "./JS/getApi.js";
import { uiComponents } from "./JS/uiComponents.js";
import { SortCategory } from "./JS/filter.js";

async function init() {
  try {
    const apiData = new GetApiData();
    const sortCategory = new SortCategory();
    const data = await apiData.getData();
    const allProducts = data;

    const ui = new uiComponents(".container");
    ui.products = allProducts;

    const navMenu = document.querySelector(".navmenu");

    navMenu.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") return;

      const category = e.target.dataset.category;
      const main = e.target.dataset.main;
      const sub = e.target.dataset.sub;

      if (!category && !main && !sub) return;

      ui.container.innerHTML = "";

      if (category === "new") {
        ui.products = allProducts;
        ui.renderProduct();
        return;
      }

      const filtered = sortCategory.filter(allProducts, main, sub);
      ui.products = filtered;
      ui.renderProduct();
    });

  } catch (error) {
    showError("Loading error");
  }
}

init();
