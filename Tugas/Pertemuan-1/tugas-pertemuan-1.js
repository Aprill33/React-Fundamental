const mahasiswa = {
    nama: "Budi Santoso",
    nim: "23110001",
    prodi: "Teknik Informatasi",
    semester: 4,
    nilai: [85, 90, 78, 88]
};

const {nama, nim, prodi, semester, nilai} = mahasiswa;

const rataRata = (nilai) => {
    let total = 0;

    for (let n of nilai){
        total += n;
    }

    return total / nilai.length;
}

