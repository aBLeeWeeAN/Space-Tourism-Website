import { update_active_tab } from "./tab_switcher";

const tab_buttons = document.getElementsByClassName("tab-panel-pagination__button");

let current_active = {
    button: document.getElementById("mId__douglas-tab-button") as HTMLElement,
    picture: document.querySelector<HTMLElement>('.pictures__img[data-tab-name="douglas"]'),
    tab: document.querySelector<HTMLElement>('.tab-panel__tab[data-tab-name="douglas"]'),
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
