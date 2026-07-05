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