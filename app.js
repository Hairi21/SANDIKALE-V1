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
