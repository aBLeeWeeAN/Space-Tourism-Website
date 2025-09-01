import { update_active_tab } from "./tab_switcher";

const tab_buttons = document.getElementsByClassName("tab-panel-navigation__button");

let current_active = {
    button: document.getElementById("mId__moon-tab-button") as HTMLElement,
    picture: document.querySelector<HTMLElement>('.pictures__img[data-tab-name="moon"]'),
    tab: document.querySelector<HTMLElement>('.tab-panel__tab[data-tab-name="moon"]'),
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
