import { menuHover as menu } from "./JS/menuHover.js";
import { GetApiData } from "./JS/getApi.js";
import { uiComponents } from "./JS/uiComponents.js";

async function init() {
  try {
    const apiData = new GetApiData();
    const data = await apiData.getData();
    const allProducts = data;

    const ui = new uiComponents(".container");
    ui.products = allProducts;

    const navMenu = document.querySelector(".navmenu");

    navMenu.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") {
        return;
      }
      const category = e.target.dataset.category;
      if (!category) {
        return;
      }

      ui.container.innerHTML = "";

      if (category === "new") {
        ui.products = allProducts;
        ui.renderProduct();
        return;
      }
    });
  } catch (error) {
    showError("Loading error");
  }
}

init();
