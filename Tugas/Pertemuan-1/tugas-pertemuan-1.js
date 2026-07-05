const mahasiswa = {
    nama: "Budi Santoso",
    nim: "23110001",
    prodi: "Teknik Informatasi",
    semester: 4,
    nilai: [85, 90, 78, 88]
};
// destructuring assignment untuk mengamabil data dari object mahasiswa
const {nama, nim, prodi, semester, nilai} = mahasiswa;
// arrow function untuk menghitung nilai rata-rata mahasiswa
const rataRata = (nilai) => {
    let total = 0;

    for (let n of nilai){
        total += n;
    }

    return total / nilai.length;
}
// menambahkan properti baru pada object mahasiswa menggunakan spread operator
const dataLengkapMhs ={
    ...mahasiswa,
    status : "aktif"
}
