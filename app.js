// SIDEBAR
const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");

if (menuButton && sidebar) {
    menuButton.onclick = function () {
        sidebar.classList.toggle("active");
    };
}

// MODAL TAMBAH PRODUK
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const productModal = document.getElementById("productModal");

if (openModal && closeModal && productModal) {
    openModal.onclick = function () {
        productModal.classList.add("active");
    };

    closeModal.onclick = function () {
        productModal.classList.remove("active");
    };

    window.onclick = function (e) {
        if (e.target === productModal) {
            productModal.classList.remove("active");
        }
    };
}
