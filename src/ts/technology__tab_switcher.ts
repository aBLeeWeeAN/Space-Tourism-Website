import { update_active_tab } from "./tab_switcher";

const tab_buttons = document.getElementsByClassName("tab-panel-pagination__button");

let current_active = {
    button: document.getElementById("mId__launch-vehicle-tab-button") as HTMLElement,
    picture: document.querySelector<HTMLElement>('.pictures__img[data-tab-name="launch-vehicle"]'),
    tab: document.querySelector<HTMLElement>('.tab-panel__tab[data-tab-name="launch-vehicle"]'),
};

// Навешиваем обработчики на все кнопки
Array.from(tab_buttons).forEach((button) => {
    button.addEventListener("click", () => {
        const tab_name = (button as HTMLElement).dataset.tabName;
        if (tab_name) {
            update_active_tab(button as HTMLElement, tab_name, current_active);
        }
    });
});

export {};
