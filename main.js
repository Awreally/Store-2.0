import {menuHover as menu} from "./JS/menuHover.js";
import { GetApiData } from "./JS/getApi.js";
import { uiComponents } from "./JS/uiComponents.js";

async function init() {
    try {
        const apiData = new GetApiData();
        const data = await apiData.getData();
        const ui = new uiComponents(".container");
        ui.products = data;
        ui.renderProduct();
    } catch (error) {
        showError('Loading error');
    }
}

init();

