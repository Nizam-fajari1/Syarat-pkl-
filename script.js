document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const nama =
        document.getElementById("name").value.trim();

        const email =
        document.getElementById("email").value.trim();

        const pesan =
        document.getElementById("message").value.trim();

        if(nama==="" || email==="" || pesan===""){

            alert("Semua data wajib diisi!");

            return;

        }

        const nomorWA="6287816109438";
        const isiPesan=`

Halo Muhammad Nizam Fajari 👋

Saya melihat portfolio Anda.

Nama :
${nama}

Email :
${email}

Pesan :
${pesan}

Terima kasih.

`;

        const link="https://wa.me/"+6287816109438+
        "?text="+encodeURIComponent(isiPesan);

        window.open(link,"_blank");

        form.reset();

    });

});