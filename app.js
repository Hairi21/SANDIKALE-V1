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
// SIMPAN KATEGORI
const saveCategory = document.getElementById("saveCategory");
const namaKategori = document.getElementById("namaKategori");
const kategoriTable = document.getElementById("kategoriTable");

if (saveCategory && namaKategori && kategoriTable) {

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

} // <- tutup if (saveCategory && namaKategori && kategoriTable)

// TAMPILKAN KATEGORI DI MASTER PRODUK
const kategoriProduk = document.getElementById("kategoriProduk");

if (kategoriProduk) {

    kategoriProduk.innerHTML =
        '<option value="">Pilih Kategori</option>';

    const daftarKategori =
        JSON.parse(localStorage.getItem("kategori")) || [];

    daftarKategori.forEach(function(kategori) {

        const option = document.createElement("option");

        option.value = kategori;
        option.textContent = kategori;

        kategoriProduk.appendChild(option);

    });

}
// DATABASE PRODUK
let daftarProduk =
    JSON.parse(localStorage.getItem("produk")) || [];

function simpanProduk() {
    localStorage.setItem(
        "produk",
        JSON.stringify(daftarProduk)
    );
}

const saveProduct = document.getElementById("saveProduct");

if (saveProduct) {

    saveProduct.onclick = function () {

        const nama = document.getElementById("namaProduk").value.trim();
        const merk = document.getElementById("merkProduk").value.trim();
        const kategori = document.getElementById("kategoriProduk").value;
        const harga = document.getElementById("hargaProduk").value;
        const stok = document.getElementById("stokProduk").value;

        if (
            nama === "" ||
            merk === "" ||
            kategori === "" ||
            harga === "" ||
            stok === ""
        ) {
            alert("Lengkapi semua data!");
            return;
        }

        daftarProduk.push({
            nama,
            merk,
            kategori,
            harga,
            stok
        });

        simpanProduk();
tampilProduk();
        alert("Produk berhasil disimpan");

        productModal.classList.remove("active");
    };

}
// DATABASE PRODUK
let daftarProduk =
    JSON.parse(localStorage.getItem("produk")) || [];

const saveProduct = document.getElementById("saveProduct");

if (saveProduct) {

    saveProduct.onclick = function () {

        const input = productModal.querySelectorAll("input");

        const kode = input[0].value.trim();
        const nama = input[1].value.trim();
        const kategori = kategoriProduk.value;
        const harga = input[2].value;
        const stok = input[3].value;

        if (
            kode === "" ||
            nama === "" ||
            kategori === "" ||
            harga === "" ||
            stok === ""
        ) {
            alert("Semua data wajib diisi!");
            return;
        }

        daftarProduk.push({
            kode,
            nama,
            kategori,
            harga,
            stok,
            status: "Aktif"
        });

        localStorage.setItem(
            "produk",
            JSON.stringify(daftarProduk)
        );
tampilProduk();
        alert("Produk berhasil disimpan");

        productModal.classList.remove("active");
    };

}
function tampilProduk() {

    const produkTable = document.getElementById("produkTable");

    if (!produkTable) return;

    const daftarProduk =
        JSON.parse(localStorage.getItem("produk")) || [];

    produkTable.innerHTML = "";

    if (daftarProduk.length === 0) {

        produkTable.innerHTML = `
        <tr>
            <td colspan="7" class="empty">
                Belum ada produk
            </td>
        </tr>`;

        return;
    }

    daftarProduk.forEach(function(produk, index){

        produkTable.innerHTML += `
        <tr>

            <td>${produk.kode}</td>

            <td>${produk.nama}</td>

            <td>${produk.kategori}</td>

            <td>Rp ${Number(produk.harga).toLocaleString("id-ID")}</td>

            <td>${produk.stok}</td>

            <td>${produk.status}</td>

            <td>
                <button onclick="hapusProduk(${index})">
                    Hapus
                </button>
            </td>

        </tr>`;
    });

}
function hapusProduk(index){

    let daftarProduk =
        JSON.parse(localStorage.getItem("produk")) || [];

    daftarProduk.splice(index, 1);

    localStorage.setItem(
        "produk",
        JSON.stringify(daftarProduk)
    );

    tampilProduk();

}
// Tambahkan baris ini
window.hapusProduk = hapusProduk;

tampilProduk();
