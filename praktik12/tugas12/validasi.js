function validateForm() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var jam = document.getElementById('jam').value;
    var tujuan = document.getElementById('tujuan').value;
    var jumlah = document.getElementById('jumlah').value;

    var errorMessages = [];

    // Validasi Nama
    if (nama.length === 0 || nama.length > 30) {
        errorMessages.push("Nama Pelanggan harus diisi dan maksimal 30 karakter.");
        document.getElementById('nama').classList.add('error');
    } else {
        document.getElementById('nama').classList.remove('error');
    }

    // Validasi Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessages.push("Format Email tidak valid.");
        document.getElementById('email').classList.add('error');
    } else {
        document.getElementById('email').classList.remove('error');
    }

    // Validasi Jam Keberangkatan
    var jamRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!jamRegex.test(jam)) {
        errorMessages.push("Format Jam Keberangkatan tidak valid (00:00 - 23:59).");
        document.getElementById('jam').classList.add('error');
    } else {
        document.getElementById('jam').classList.remove('error');
    }

    // Validasi Tujuan Keberangkatan
    if (tujuan.length === 0) {
        errorMessages.push("Tujuan Keberangkatan harus diisi.");
        document.getElementById('tujuan').classList.add('error');
    } else {
        document.getElementById('tujuan').classList.remove('error');
    }

    // Validasi Jumlah Tiket
    var jumlahInt = parseInt(jumlah);
    if (isNaN(jumlahInt) || jumlahInt < 1 || jumlahInt > 10) {
        errorMessages.push("Jumlah Tiket harus berupa bilangan bulat antara 1 dan 10.");
        document.getElementById('jumlah').classList.add('error');
    } else {
        document.getElementById('jumlah').classList.remove('error');
    }

    // Tampilkan hasil validasi
    var resultDiv = document.getElementById('result');
    if (errorMessages.length === 0) {
        resultDiv.innerHTML = `
            <p>Data Valid:</p>
            <p>Nama Pelanggan: ${nama}</p>
            <p>Email: ${email}</p>
            <p>Jam Keberangkatan: ${jam}</p>
            <p>Tujuan Keberangkatan: ${tujuan}</p>
            <p>Jumlah Tiket: ${jumlah}</p>
        `;
    } else {
        resultDiv.innerHTML = "<p class='error'>Error: " + errorMessages.join(', ') + "</p>";
    }
}