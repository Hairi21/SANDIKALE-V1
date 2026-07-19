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
