// Функция переключения активного таба
export const update_active_tab = (
    button: HTMLElement,
    tab_name: string,
    current_active: {
        button: HTMLElement;
        picture: HTMLElement | null;
        tab: HTMLElement | null;
    }
) => {
    // Снимаем активность с предыдущей кнопки
    current_active.button.classList.remove("active");
    current_active.button.setAttribute("aria-selected", "false");

    // Снимаем активность с предыдущей планеты
    current_active.picture?.classList.remove("active");
    // Снимаем активность с предыдущей вкладки
    current_active.tab?.classList.remove("active");

    // Добавляем активность новым элементам
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    current_active.button = button;

    const new_picture = document.querySelector<HTMLElement>(`.pictures__img[data-tab-name="${tab_name}"]`);
    new_picture?.classList.add("active");
    current_active.picture = new_picture ?? null;

    const new_tab = document.querySelector<HTMLElement>(`.tab-panel__tab[data-tab-name="${tab_name}"]`);
    new_tab?.classList.add("active");
    current_active.tab = new_tab ?? null;
};
