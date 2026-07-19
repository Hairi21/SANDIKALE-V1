// DATABASE KATEGORI
let daftarKategori =
    JSON.parse(localStorage.getItem("kategori")) || [];

function simpanKategori() {
    localStorage.setItem(
        "kategori",
        JSON.stringify(daftarKategori)
    );
}

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
// MODAL TAMBAH KATEGORI
const openCategoryModal = document.getElementById("openCategoryModal");
const closeCategoryModal = document.getElementById("closeCategoryModal");
const categoryModal = document.getElementById("categoryModal");

if (openCategoryModal && closeCategoryModal && categoryModal) {

    openCategoryModal.onclick = function () {
        categoryModal.classList.add("active");
    };

    closeCategoryModal.onclick = function () {
        categoryModal.classList.remove("active");
    };

    window.addEventListener("click", function (e) {
        if (e.target === categoryModal) {
            categoryModal.classList.remove("active");
        }
    });

}

saveCategory.onclick = function () {

    const nama = namaKategori.value.trim();

    if (nama === "") {
        alert("Nama kategori wajib diisi!");
        return;
    }

    daftarKategori.push(nama);

    simpanKategori();

    tampilKategori();

    namaKategori.value = "";

    categoryModal.classList.remove("active");

};
function tampilKategori() {

    if (!kategoriTable) return;

    kategoriTable.innerHTML = "";

    if (daftarKategori.length === 0) {
        kategoriTable.innerHTML = `
        <tr>
            <td colspan="3" class="empty">
                Belum ada kategori
            </td>
        </tr>`;
        return;
    }

    daftarKategori.forEach((nama, index) => {

        kategoriTable.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${nama}</td>
            <td>
                <button onclick="hapusKategori(${index})">
                    Hapus
                </button>
            </td>
        </tr>`;

    });

}

function hapusKategori(index) {

    daftarKategori.splice(index, 1);

    simpanKategori();

    tampilKategori();

}

tampilKategori();
