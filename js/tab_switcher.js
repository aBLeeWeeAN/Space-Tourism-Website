"use strict";
(() => {
  // src/ts/tab_switcher.ts
  var update_active_tab = (button, tab_name, current_active) => {
    current_active.button.classList.remove("active");
    current_active.button.setAttribute("aria-selected", "false");
    current_active.picture?.classList.remove("active");
    current_active.tab?.classList.remove("active");
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    current_active.button = button;
    const new_picture = document.querySelector(`.pictures__img[data-tab-name="${tab_name}"]`);
    new_picture?.classList.add("active");
    current_active.picture = new_picture ?? null;
    const new_tab = document.querySelector(`.tab-panel__tab[data-tab-name="${tab_name}"]`);
    new_tab?.classList.add("active");
    current_active.tab = new_tab ?? null;
  };
})();
