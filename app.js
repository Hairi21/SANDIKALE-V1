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
// SIMPAN KATEGORI
const saveCategory = document.getElementById("saveCategory");
const namaKategori = document.getElementById("namaKategori");
const kategoriTable = document.getElementById("kategoriTable");

if (saveCategory && namaKategori && kategoriTable) {

    saveCategory.onclick = function () {

        const nama = namaKategori.value.trim();

        if (nama === "") {
            alert("Nama kategori tidak boleh kosong!");
            return;
        }

        // hapus tulisan "Belum ada kategori"
        if (kategoriTable.querySelector(".empty")) {
            kategoriTable.innerHTML = "";
        }

        const jumlah = kategoriTable.rows.length + 1;

        kategoriTable.innerHTML += `
            <tr>
                <td>${jumlah}</td>
                <td>${nama}</td>
                <td>
                    <button>Hapus</button>
                </td>
            </tr>
        `;

        namaKategori.value = "";
        categoryModal.classList.remove("active");

    };

}
// SIMPAN KATEGORI
const saveCategory = document.getElementById("saveCategory");
const namaKategori = document.getElementById("namaKategori");
const kategoriTable = document.getElementById("kategoriTable");

let nomorKategori = 1;

if (saveCategory && namaKategori && kategoriTable) {

    saveCategory.onclick = function () {

        const nama = namaKategori.value.trim();

        if (nama === "") {
            alert("Nama kategori wajib diisi!");
            return;
        }

        // Hapus tulisan "Belum ada kategori"
        if (kategoriTable.querySelector(".empty")) {
            kategoriTable.innerHTML = "";
        }

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${nomorKategori++}</td>
            <td>${nama}</td>
            <td>
                <button>Hapus</button>
            </td>
        `;

        kategoriTable.appendChild(row);

        namaKategori.value = "";

        categoryModal.classList.remove("active");

    };

}
