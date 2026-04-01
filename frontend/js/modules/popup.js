export function popup() {
    const popupElement = document.querySelector("#albumPopup");
    const popupOverlay = document.querySelector(".album-popup-overlay");
    const popupCloseButton = document.querySelector("#closeAlbumPopup");

    const popupGenre = document.querySelector(".popup-genre");
    const popupTitle = document.querySelector(".popup-title");
    const popupArtist = document.querySelector(".popup-artist");
    const popupDescription = document.querySelector(".popup-description");
    const popupPrice = document.querySelector(".popup-price");
    const popupImage = document.querySelector(".album-popup-image");

    const albumCards = document.querySelectorAll(".album-card");

    function openPopup(card) {
        if (!card) {
            return;
        }

        popupGenre.textContent = card.dataset.genre || "";
        popupTitle.textContent = card.dataset.title || "";
        popupArtist.textContent = card.dataset.artist || "";
        popupDescription.textContent = card.dataset.description || "";
        popupPrice.textContent = card.dataset.price || "";

        if (popupImage) {
            popupImage.src = card.dataset.image || "";
            popupImage.alt = card.dataset.title || "Album cover";
        }

        popupElement.classList.remove("hidden");
    }

    function closePopup() {
        popupElement.classList.add("hidden");
    }

    function handleAlbumCardClick(event) {
        event.preventDefault();
        openPopup(event.currentTarget);
    }

    function handleEscapeKey(event) {
        if (event.key === "Escape") {
            closePopup();
        }
    }

    if (!popupElement || !popupOverlay || !popupCloseButton || albumCards.length === 0) {
        return;
    }

    let i = 0;
    while (i < albumCards.length) {
        albumCards[i].addEventListener("click", handleAlbumCardClick);
        i = i + 1;
    }

    popupCloseButton.addEventListener("click", closePopup);
    popupOverlay.addEventListener("click", closePopup);
    document.addEventListener("keydown", handleEscapeKey);
}