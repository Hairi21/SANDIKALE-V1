// =========================
// SANDIKALE POS
// MASTER SUPPLIER
// =========================
alert("supplier.js berhasil dimuat");
// Database Supplier
let daftarSupplier =
JSON.parse(localStorage.getItem("supplier")) || [];

// Ambil Komponen
const supplierModal = document.getElementById("supplierModal");
const openSupplierModal = document.getElementById("openSupplierModal");
const closeSupplierModal = document.getElementById("closeSupplierModal");
const saveSupplier = document.getElementById("saveSupplier");
const supplierTable = document.getElementById("supplierTable");

// Buka Modal
if(openSupplierModal){

    openSupplierModal.onclick=function(){

        supplierModal.classList.add("active");

    };

}

// Tutup Modal
if(closeSupplierModal){

    closeSupplierModal.onclick=function(){

        supplierModal.classList.remove("active");

    };

}

// Simpan Database
function simpanSupplier(){

    localStorage.setItem(
        "supplier",
        JSON.stringify(daftarSupplier)
    );

}

// Tampilkan Supplier
function tampilSupplier(){

    if(!supplierTable) return;

    supplierTable.innerHTML="";

    if(daftarSupplier.length===0){

        supplierTable.innerHTML=`
        <tr>
            <td colspan="6">
                Belum ada data supplier
            </td>
        </tr>`;

        return;

    }

    daftarSupplier.forEach(function(item){

        supplierTable.innerHTML+=`
        <tr>

            <td>${item.kode}</td>

            <td>${item.nama}</td>

            <td>${item.pic}</td>

            <td>${item.hp}</td>

            <td>${item.status}</td>

            <td>-</td>

        </tr>`;

    });

}

// Simpan Supplier
if(saveSupplier){

    saveSupplier.onclick=function(){

        const kode=document.getElementById("kodeSupplier").value.trim();

        const nama=document.getElementById("namaSupplier").value.trim();

        const pic=document.getElementById("picSupplier").value.trim();

        const hp=document.getElementById("hpSupplier").value.trim();

        const status=document.getElementById("statusSupplier").value;

        if(
            kode=="" ||
            nama=="" ||
            pic=="" ||
            hp==""
        ){

            alert("Lengkapi semua data!");

            return;

        }

        daftarSupplier.push({

            kode,
            nama,
            pic,
            hp,
            status

        });

        simpanSupplier();

        tampilSupplier();

        document.getElementById("kodeSupplier").value="";
        document.getElementById("namaSupplier").value="";
        document.getElementById("picSupplier").value="";
        document.getElementById("hpSupplier").value="";

        supplierModal.classList.remove("active");

    };

}

tampilSupplier();
