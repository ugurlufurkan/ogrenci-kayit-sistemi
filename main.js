let ogrenciler = JSON.parse(localStorage.getItem("ogrenciler")) || [];

const liste = document.getElementById("liste");
const ad = document.getElementById("ad");
const numara = document.getElementById("numara");
const ekleBtn = document.getElementById("ekleBtn");
const iptalBtn = document.getElementById("iptalBtn");
const arama = document.getElementById("arama");
const sayac = document.getElementById("sayac");
const bosMesaj = document.getElementById("bosMesaj");

let duzenlenenIndex = -1;
function kaydet() {
    localStorage.setItem("ogrenciler", JSON.stringify(ogrenciler));
}

function guncelleSayac() {
    sayac.textContent = "Toplam Öğrenci : " + ogrenciler.length;
}

function render(veri = ogrenciler) {
    liste.innerHTML = "";

    if (veri.length === 0) {
        bosMesaj.style.display = "block";
    } else {
        bosMesaj.style.display = "none";
    }

    veri.forEach((ogrenci, index) => {
        liste.innerHTML += `
        <tr>
            <td>${ogrenci.ad}</td>
            <td>${ogrenci.no}</td>
            <td>
                <button class="duzenle" onclick="duzenle(${index})">Düzenle</button>
                <button class="sil" onclick="sil(${index})">Sil</button>
            </td>
        </tr>`;
    });

    guncelleSayac();
}

render();