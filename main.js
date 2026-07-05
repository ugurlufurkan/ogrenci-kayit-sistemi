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
ekleBtn.addEventListener("click", () => {
    const isim = ad.value.trim();
    const no = numara.value.trim();

    if (isim === "" || no === "") {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    if (!/^[A-Za-zÇĞİÖŞÜçğıöşü\s]+$/.test(isim)) {
        alert("Ad kısmına sadece harf girilebilir.");
        return;
    }

    if (!/^\d+$/.test(no)) {
        alert("Öğrenci numarası sadece rakamlardan oluşmalıdır.");
        return;
    }

    const ayniNumara = ogrenciler.findIndex(x => x.no === no);

    if (ayniNumara !== -1 && ayniNumara !== duzenlenenIndex) {
        alert("Bu öğrenci numarası zaten kayıtlı.");
        return;
    }

    if (duzenlenenIndex === -1) {
        ogrenciler.push({
            ad: isim,
            no: no
        });
    } else {
        ogrenciler[duzenlenenIndex] = {
            ad: isim,
            no: no
        };

        duzenlenenIndex = -1;
        ekleBtn.textContent = "Ekle";
        iptalBtn.style.display = "none";
    }

    kaydet();
    render();

    ad.value = "";
    numara.value = "";
});
function sil(index) {
    if (confirm("Bu öğrenci silinsin mi?")) {
        ogrenciler.splice(index, 1);
        kaydet();
        render();
    }
}