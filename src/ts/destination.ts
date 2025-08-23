const planets = document.getElementsByClassName("planets__img");
const tabs = document.getElementsByClassName("tab-panel__tab");
const tab_buttons = document.getElementsByClassName("tab-panel-navigation__button");

let current_active_button = document.getElementById("moon-tab-button") as HTMLElement;
let current_active_planet = document.querySelector<HTMLElement>('.planets__img[data-planet-name="moon"]');
let current_active_tab = document.querySelector<HTMLElement>('.tab-panel__tab[data-planet-name="moon"]');

// Функция переключения активного таба
const activateTab = (button: HTMLElement, planet_name: string) => {
    // Снимаем активность с предыдущей кнопки
    current_active_button.classList.remove("active");
    current_active_button.setAttribute("aria-selected", "false");

    // Снимаем активность с предыдущей планеты
    current_active_planet?.classList.remove("active");
    // Снимаем активность с предыдущей вкладки
    current_active_tab?.classList.remove("active");

    // Добавляем активность новым элементам
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    current_active_button = button;

    const new_planet = document.querySelector<HTMLElement>(`.planets__img[data-planet-name="${planet_name}"]`);
    new_planet?.classList.add("active");
    current_active_planet = new_planet ?? null;

    const new_tab = document.querySelector<HTMLElement>(`.tab-panel__tab[data-planet-name="${planet_name}"]`);
    new_tab?.classList.add("active");
    current_active_tab = new_tab ?? null;
};

// Навешиваем обработчики на все кнопки
Array.from(tab_buttons).forEach((button) => {
    button.addEventListener("click", () => {
        const planet_name = (button as HTMLElement).dataset.planetName;
        if (planet_name) {
            activateTab(button as HTMLElement, planet_name);
        }
    });
});
