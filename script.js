// Tunggu hingga seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Ambil elemen-elemen penting dari DOM
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Fungsi untuk menampilkan pesan error spesifik
    function displayError(element, message) {
        const errorDiv = document.getElementById(`${element.id}-error`);
        errorDiv.textContent = message;
        element.classList.add('input-error'); // Tambahkan kelas untuk styling error
    }

    // Fungsi untuk menghapus pesan error
    function clearError(element) {
        const errorDiv = document.getElementById(`${element.id}-error`);
        errorDiv.textContent = '';
        element.classList.remove('input-error');
    }

    // Fungsi validasi email sederhana
    function isValidEmail(email) {
        // Regex sederhana untuk memastikan format email benar
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // 2. Tambahkan Event Listener pada saat formulir dikirim (submit)
    form.addEventListener('submit', function(e) {
        // Mencegah formulir dikirim secara default (page refresh)
        e.preventDefault(); 

        let isValid = true;
        
        // Hapus semua pesan sebelumnya
        clearError(nameInput);
        clearError(emailInput);
        clearError(messageInput);
        successMessage.textContent = '';

        // --- VALIDASI ---

        // Validasi Nama
        if (nameInput.value.trim() === '') {
            displayError(nameInput, 'Nama wajib diisi.');
            isValid = false;
        }

        // Validasi Email
        if (emailInput.value.trim() === '') {
            displayError(emailInput, 'Email wajib diisi.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            displayError(emailInput, 'Format email tidak valid.');
            isValid = false;
        }

        // Validasi Pesan
        if (messageInput.value.trim() === '') {
            displayError(messageInput, 'Pesan wajib diisi.');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            displayError(messageInput, 'Pesan terlalu pendek (min. 10 karakter).');
            isValid = false;
        }

        // 3. Jika semua validasi sukses
        if (isValid) {
            // Dalam proyek nyata, di sini Anda akan menggunakan fetch() atau XMLHttpRequest 
            // untuk mengirim data ke server.

            // --- SIMULASI PENGIRIMAN ---

            console.log('Data Formulir Siap Dikirim:', {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            });

            // Simulasi proses pengiriman (misalnya 1 detik)
            // Tombol di-disable agar tidak bisa dikirim berkali-kali
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'otw ngirim booss 🚀';

            setTimeout(() => {
                // Menampilkan pesan sukses
                successMessage.textContent = '✅ Pesannya udah ke kirim tuh tunggu balasan yaaa...';
                
                // Reset formulir
                form.reset();

                // Kembalikan tombol ke keadaan semula
                submitButton.disabled = false;
                submitButton.textContent = '📩 Kirim Pesan';

                // Hapus pesan sukses setelah beberapa detik
                setTimeout(() => {
                    successMessage.textContent = '';
                }, 7000);

            }, 1000); // Tunggu 1 detik untuk simulasi

        }
    });
});