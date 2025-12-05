import { GetApiData } from "./JS/getApi.js";
import { uiComponents } from "./JS/uiComponents.js";
import { SortCategory } from "./JS/filter.js";

async function init() {
  try {
    const apiData = new GetApiData();
    const allProducts = await apiData.getData();

    const ui = new uiComponents(".container");
    const sortCategory = new SortCategory(allProducts);

    const navMenu = document.querySelector(".navmenu");
    console.log("Dynamic sub categories:", sortCategory.subCategoryMap);

    navMenu.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") return;

      const category = e.target.dataset.category;
      const main = e.target.dataset.main;
      const sub = e.target.dataset.sub;

      if (!category && !main && !sub) return;

      if (category === "new") {
        ui.render(allProducts);
        return;
      }

      const filtered = sortCategory.filter(allProducts, main, sub);
      ui.render(filtered);
    });
  } catch (error) {
    showError("Loading error");
  }
}

init();
