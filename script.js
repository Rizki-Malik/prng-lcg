function generate() {
    // Mendapatkan Nilai Input
    const m = parseInt(document.getElementById('m').value);
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const seed = parseInt(document.getElementById('seed').value);
    const jumlah = parseInt(document.getElementById('bil').value);

    // Mencegah Nilai Not a Number tampil dan Memunculkan pesan error
    if (isNaN(jumlah) || jumlah < 1 || jumlah > 100 || isNaN(m) || isNaN(a) || isNaN(b) || isNaN(seed)) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Isilah jumlah bilangan dengan benar.',
        });
        toggleModal()
        return;
    }

    // Inisialisasi X0
    let xn = seed;
    let accTabs = '';

    // Pembangkit Bilangan Acak Semu
    for (let i = 0; i < jumlah; i++) {
    // Berbasis Linear Congruential Generator
    const hasil = (a * xn + b) % m;

    // Menghasilkan langkah-langkah penyelesaian
    let langkah = '';
    langkah += 'X' + i + ' = ' + xn + ' (Nilai Awal) <br>';
    langkah += 'X' + (i + 1) + ' = (' + a + ' * ' + 'X' + i + ' + ' + b + ') % ' + m + '<br>';
    langkah += 'X' + (i + 1) + ' = (' + a + ' * ' + xn + ' + ' + b + ') % ' + m + '<br>';
    langkah += 'X' + (i + 1) + ' = ' + (a * xn + b) + ' % ' + m + '<br>';
    langkah += 'X' + (i + 1) + ' = ' + hasil;

    // Tambahkan judul dan hasil xn pada accordion
    accTabs += '<div class="group outline-none accordion-section" tabindex="1">';
    accTabs += '<div class="group bg-putih flex justify-between px-4 py-3 items-center text-coklat transition ease duration-500 cursor-pointer pr-10 relative">';
    accTabs += '<div class="text-coklat transition ease duration-500">';
    accTabs += 'X' + i + ' = ' + xn;
    accTabs += '</div>';
    accTabs += '<div class="h-8 w-8 border border-cokmu rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-coklat group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">';
    accTabs += '<i class="fa-solid fa-chevron-down"></i>';
    accTabs += '</div>';
    accTabs += '</div>';
    accTabs += '<div class="h-1 bg-gradient-to-r from-cokmu to-coklat rounded"></div>';
    accTabs += '<div class="group-focus:max-h-screen max-h-0 bg-gradient-to-r from-cokmu to-laut px-4 overflow-hidden ease duration-500 rounded">';
    accTabs += '<p class="p-2 text-putih text-justify">';
    accTabs += langkah;
    accTabs += '</p>';
    accTabs += '</div>';
    accTabs += '</div>';

    // Perbarui nilai xn
    xn = hasil;
    }


    // Tampilkan di halaman
    document.getElementById('accordion-tabs').innerHTML = accTabs;
}