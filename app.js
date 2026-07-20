// =========================
// SANDIKALE V1
// APP.JS
// =========================

// DATABASE
let daftarKategori =
JSON.parse(localStorage.getItem("kategori")) || [];

let daftarProduk =
JSON.parse(localStorage.getItem("produk")) || [];

function simpanKategori(){
    localStorage.setItem(
        "kategori",
        JSON.stringify(daftarKategori)
    );
}

function simpanProduk(){
    localStorage.setItem(
        "produk",
        JSON.stringify(daftarProduk)
    );
}

// =========================
// SIDEBAR
// =========================

const menuButton =
document.getElementById("menuButton");

const sidebar =
document.getElementById("sidebar");

if(menuButton && sidebar){

    menuButton.addEventListener("click",function(){

        sidebar.classList.toggle("active");

    });

}
// =========================
// MODAL PRODUK
// =========================

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const productModal = document.getElementById("productModal");

if (openModal && productModal) {

    openModal.onclick = function () {
        productModal.classList.add("active");
    };

}

if (closeModal && productModal) {

    closeModal.onclick = function () {
        productModal.classList.remove("active");
    };

}

window.addEventListener("click", function (e) {

    if (e.target === productModal) {
        productModal.classList.remove("active");
    }

});
// =========================
// MODAL KATEGORI
// =========================

const categoryModal =
document.getElementById("categoryModal");

const openCategoryModal =
document.getElementById("openCategoryModal");

const closeCategoryModal =
document.getElementById("closeCategoryModal");

if(openCategoryModal && categoryModal){

    openCategoryModal.onclick=function(){

        categoryModal.classList.add("active");

    };

}

if(closeCategoryModal && categoryModal){

    closeCategoryModal.onclick=function(){

        categoryModal.classList.remove("active");

    };

}

window.addEventListener("click",function(e){

    if(e.target===categoryModal){

        categoryModal.classList.remove("active");

    }

});
// =========================
// MASTER KATEGORI
// =========================

const saveCategory =
document.getElementById("saveCategory");

const namaKategori =
document.getElementById("namaKategori");

const kategoriTable =
document.getElementById("kategoriTable");

function tampilKategori(){

    if(!kategoriTable) return;

    kategoriTable.innerHTML="";

    if(daftarKategori.length===0){

        kategoriTable.innerHTML=`
        <tr>
            <td colspan="3" class="empty">
                Belum ada kategori
            </td>
        </tr>`;

        return;
    }

    daftarKategori.forEach(function(kategori,index){

        kategoriTable.innerHTML+=`
        <tr>

            <td>${index+1}</td>

            <td>${kategori}</td>

            <td>

                <button onclick="hapusKategori(${index})">

                    Hapus

                </button>

            </td>

        </tr>`;
    });

}

function hapusKategori(index){

    daftarKategori.splice(index,1);

    simpanKategori();

    tampilKategori();

}

window.hapusKategori=hapusKategori;

if(saveCategory){

    saveCategory.onclick=function(){

        const nama=namaKategori.value.trim();

        if(nama===""){

            alert("Nama kategori wajib diisi!");

            return;

        }

        daftarKategori.push(nama);

        simpanKategori();

        tampilKategori();

        namaKategori.value="";

        if(categoryModal){

            categoryModal.classList.remove("active");

        }

    };

}

tampilKategori();
// =========================
// DROPDOWN KATEGORI PRODUK
// =========================

const kategoriProduk = document.getElementById("kategoriProduk");

if (kategoriProduk) {

    kategoriProduk.innerHTML =
        '<option value="">Pilih Kategori</option>';

    const daftarKategori =
        JSON.parse(localStorage.getItem("kategori")) || [];

    daftarKategori.forEach(function (kategori) {

        const option = document.createElement("option");

        option.value = kategori;
        option.textContent = kategori;

        kategoriProduk.appendChild(option);

    });

}
// =========================
// MASTER PRODUK
// =========================
let editIndex = -1;
const saveProduct = document.getElementById("saveProduct");

if (saveProduct) {

    saveProduct.onclick = function () {
const kode = document.getElementById("kodeProduk").value.trim();
const nama = document.getElementById("namaProduk").value.trim();
const kategori = document.getElementById("kategoriProduk").value;
const warna = document.getElementById("warnaProduk").value.trim();
const ukuran = document.getElementById("ukuranProduk").value;
const lengan = document.getElementById("lenganProduk").value;
const harga = document.getElementById("hargaProduk").value;
const stok = document.getElementById("stokProduk").value;
      if (
    kode === "" ||
    nama === "" ||
    harga === "" ||
    stok === ""
) {
    alert("Kode, Nama, Harga, dan Stok wajib diisi!");
    return;
      }

       if (editIndex === -1) {

    // Tambah produk baru
  daftarProduk.push({
    kode,
    nama,
    kategori,
    warna,
ukuran: ukuran || "-",
lengan: lengan || "-",
    harga,
    stok,
    status:"Aktif"
});

} else {

    // Update produk yang diedit
daftarProduk[editIndex] = {
    kode,
    nama,
    kategori,
    warna,
    ukuran: ukuran || "-",
    lengan: lengan || "-",
    harga,
    stok,
    status: daftarProduk[editIndex].status
};
    // Reset mode edit
    editIndex = -1;
}

simpanProduk();
tampilProduk();

// Kosongkan form
document.getElementById("kodeProduk").value = "";
document.getElementById("namaProduk").value = "";
document.getElementById("kategoriProduk").value = "";
document.getElementById("warnaProduk").value = "";
document.getElementById("ukuranProduk").value = "";
document.getElementById("lenganProduk").value = "";
document.getElementById("hargaProduk").value = "";
document.getElementById("stokProduk").value = "";
document.getElementById("productModal").classList.remove("active");
    };

}
function tampilProduk() {

    const produkTable = document.getElementById("produkTable");

    if (!produkTable) return;

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

    daftarProduk.forEach(function(produk,index){

        produkTable.innerHTML += `
        <tr>
            <td>${produk.kode}</td>
            <td>${produk.nama}</td>
            <td>${produk.kategori}</td>
            <td>Rp ${Number(produk.harga).toLocaleString("id-ID")}</td>
            <td>${produk.stok}</td>
            <td>${produk.status}</td>
<td>

    <button onclick="editProduk(${index})">
        Edit
    </button>

    <button onclick="hapusProduk(${index})">
        Hapus
    </button>

</td>
        </tr>`;
    });

}
function editProduk(index){

    const produk = daftarProduk[index];

    document.getElementById("kodeProduk").value = produk.kode;
    document.getElementById("namaProduk").value = produk.nama;
    document.getElementById("kategoriProduk").value = produk.kategori;
    document.getElementById("warnaProduk").value = produk.warna || "";
    document.getElementById("ukuranProduk").value = produk.ukuran || "";
    document.getElementById("lenganProduk").value = produk.lengan || "";
    document.getElementById("hargaProduk").value = produk.harga;
    document.getElementById("stokProduk").value = produk.stok;

    editIndex = index;

    productModal.classList.add("active");

}
function hapusProduk(index){

    daftarProduk.splice(index,1);

    simpanProduk();

    tampilProduk();

}
window.editProduk = editProduk;
window.hapusProduk = hapusProduk;

tampilProduk();
// =========================
// MASTER CUSTOMER
// =========================

let daftarCustomer =
JSON.parse(localStorage.getItem("customer")) || [];

function simpanCustomer(){
    localStorage.setItem(
        "customer",
        JSON.stringify(daftarCustomer)
    );
}

const customerModal =
document.getElementById("customerModal");

const openCustomerModal =
document.getElementById("openCustomerModal");

const closeCustomerModal =
document.getElementById("closeCustomerModal");

if(openCustomerModal){

    openCustomerModal.onclick=function(){

        customerModal.classList.add("active");

    };

}

if (openCustomerModal && customerModal) {

    openCustomerModal.onclick = function () {
        customerModal.classList.add("active");
    };

}

if (closeCustomerModal && customerModal) {

    closeCustomerModal.onclick = function () {
        customerModal.classList.remove("active");
    };

}

window.addEventListener("click", function (e) {

    if (e.target === customerModal) {
        customerModal.classList.remove("active");
    }

});

const saveCustomer =
document.getElementById("saveCustomer");

function tampilCustomer(){

    const customerTable =
    document.getElementById("customerTable");

    if(!customerTable) return;

    customerTable.innerHTML="";

    if(daftarCustomer.length===0){

        customerTable.innerHTML=`
        <tr>
            <td colspan="6" class="empty">
                Belum ada customer
            </td>
        </tr>`;

        return;
    }

    daftarCustomer.forEach(function(customer,index){

        customerTable.innerHTML+=`
        <tr>

            <td>${customer.kode}</td>

            <td>${customer.nama}</td>

            <td>${customer.telepon}</td>

            <td>${customer.alamat}</td>

            <td>${customer.status}</td>

            <td>

                <button onclick="hapusCustomer(${index})">
                    Hapus
                </button>

            </td>

        </tr>`;

    });

}

if(saveCustomer){

    saveCustomer.onclick=function(){

        const kode =
        document.getElementById("kodeCustomer").value.trim();

        const nama =
        document.getElementById("namaCustomer").value.trim();

        const telepon =
        document.getElementById("teleponCustomer").value.trim();

        const alamat =
        document.getElementById("alamatCustomer").value.trim();

        if(kode==="" || nama===""){

            alert("Kode dan Nama wajib diisi!");

            return;

        }

        daftarCustomer.push({

            kode,
            nama,
            telepon: telepon || "-",
            alamat: alamat || "-",
            status:"Aktif"

        });

        simpanCustomer();

        tampilCustomer();

        customerModal.classList.remove("active");

        document.getElementById("kodeCustomer").value="";
        document.getElementById("namaCustomer").value="";
        document.getElementById("teleponCustomer").value="";
        document.getElementById("alamatCustomer").value="";

    };

}

function hapusCustomer(index){

    daftarCustomer.splice(index,1);

    simpanCustomer();

    tampilCustomer();

}

window.hapusCustomer = hapusCustomer;

tampilCustomer();
