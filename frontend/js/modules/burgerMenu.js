export function burgerMenu() {
    const mobileMenuButton = document.querySelector("#mobileMenuBtn");
    const mobileMenu = document.querySelector("#mobileMenu");

    function toggleMobileMenu() {
        mobileMenu.classList.toggle("open");
        mobileMenuButton.classList.toggle("active");
    }

    if (!mobileMenuButton || !mobileMenu) {
        return;
    }

    mobileMenuButton.addEventListener("click", toggleMobileMenu);
}