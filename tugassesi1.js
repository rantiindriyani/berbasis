// Deklarasi variabel-variabel identitas
const nama = "RANTI INDRIYANI";
const nim = "20220040002";
console.log("identitas")
console.log("Nama = " + nama)
console.log("Nim = " + nim)

//atau bisa juga seperti ini untuk
let NAME = 'Ranti indriyani'
let NIM = '20220040002'
console.log(`perkenalkan nama saya ${NAME} dan NIM saya ${NIM}`)

//aritmatika perhitungan menggunakan let
let nilai = 10
let nilai2 = 5
console.log(`penjumalahan dari ${nilai} dan ${nilai2} = ${nilai+nilai2}`)
console.log('perkalian dari ' + nilai + ' dan '+ nilai2 + ' = ' + nilai*nilai2)
console.log(`pengurangan dari ${nilai} dan ${nilai2} = ${nilai-nilai2}`)
console.log("pembagian dari " + nilai + " dan " + nilai2 + " = " + nilai/nilai2)

//atau bisa juga aritmatika menggunakan function contoh salah satunya 
function getTotalNumber(angka1,angka2){
    let nilai = angka1 + angka2
    return nilai
}
let a = 20
let b = 5
let total = getTotalNumber(a,b)
console.log("a + b = " + total)

/*atau bisa juga seperti ini 
Deklarasi variabel-variabel untuk operasi aritmatika*/
const angka1 = 10;
const angka2 = 5;

// Melakukan operasi aritmatika sederhana
const tambah = angka1 + angka2;
const kurang = angka1 - angka2;
const kali = angka1 * angka2;
const bagi = angka1 / angka2;

// Menampilkan hasil operasi aritmatika
console.log("Hasil Penambahan: " + tambah);
console.log("Hasil Pengurangan: " + kurang);
console.log("Hasil Perkalian: " + kali);
console.log("Hasil Pembagian: " + bagi);

