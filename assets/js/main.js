window.addEventListener("scroll", function() {

    let scrollTop = D.documentElement.scrollTop;

    if (!NAVBAR.classList.contains("dinamic-border")) {

        if (scrollTop > 2) NAVBAR.classList += " dinamic-border";

    };

    if (NAVBAR.classList.contains("dinamic-border")) {

        if (scrollTop < 2) NAVBAR.classList.remove("dinamic-border");

    };

});

NAVBAR_BUTTON.addEventListener("click", function() {

    NAVBAR_BUTTON.getAttribute("aria-expanded") === "false"

        ? NAVBAR.classList.remove("dinamic-border")
        : NAVBAR.classList.add("dinamic-border");

});