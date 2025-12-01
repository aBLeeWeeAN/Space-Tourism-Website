"use strict";
(() => {
  // src/ts/tab_switcher.ts
  var update_active_tab = (button, tab_name, current_active2) => {
    current_active2.button.classList.remove("active");
    current_active2.button.setAttribute("aria-selected", "false");
    current_active2.picture?.classList.remove("active");
    current_active2.tab?.classList.remove("active");
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    current_active2.button = button;
    const new_picture = document.querySelector(`.pictures__img[data-tab-name="${tab_name}"]`);
    new_picture?.classList.add("active");
    current_active2.picture = new_picture ?? null;
    const new_tab = document.querySelector(`.tab-panel__tab[data-tab-name="${tab_name}"]`);
    new_tab?.classList.add("active");
    current_active2.tab = new_tab ?? null;
  };

  // src/ts/technology__tab_switcher.ts
  var tab_buttons = document.getElementsByClassName("tab-panel-pagination__button");
  var current_active = {
    button: document.getElementById("mId__launch-vehicle-tab-button"),
    picture: document.querySelector('.pictures__img[data-tab-name="launch-vehicle"]'),
    tab: document.querySelector('.tab-panel__tab[data-tab-name="launch-vehicle"]')
  };
  Array.from(tab_buttons).forEach((button) => {
    button.addEventListener("click", () => {
      const tab_name = button.dataset.tabName;
      if (tab_name) {
        update_active_tab(button, tab_name, current_active);
      }
    });
  });
})();
