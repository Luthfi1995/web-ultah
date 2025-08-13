function play() {
    // Musik ulang tahun gratis (Happy Birthday piano)
    var audio = new Audio(
        "audio/cinta-tanpa-kata.mp3"
    );
    audio.loop = true;
    audio.play().catch(() => {
        console.log("Autoplay diblokir, tunggu interaksi user");
    });
}

function bukaWa() {
    const nomor = "6287886609558"; // ganti dengan nomor WA tujuan
    const pesan =
        `${window.nama} udah liat semuanya. Enak aja minta traktir 🤣%0A%0A` +
        `Btw makasih udah ngucapin ><`;
    window.open(
        `https://api.whatsapp.com/send?phone=${nomor}&text=${pesan}`,
        "_blank"
    );
}

const swals = Swal.mixin({
    backdrop: "rgba(0,0,123,0.4)",
    confirmButtonColor: "#003EFF",
    cancelButtonColor: "#FF0040",
    allowOutsideClick: false,
});

async function mulai() {
    var { value: nama } = await swals.fire({
        title: "Nama kamu?",
        input: "text",
        confirmButtonText: "Lanjut",
    });

    if (nama && nama.length < 11) {
        window.nama = nama; // pastikan nama tersimpan
        play();
        await swals.fire("Hai, " + nama + " manis ツ 😍");
        await swals.fire("Cie yang hari ini ultah 🎉");
        await swals.fire("Selamat ulang tahun ya sayangg!");
        await swals.fire("Panjang umur & sehat selalu ❤️");
        pilihwarna();
    } else {
        await swals.fire(
            "Ups!",
            "Nama tidak boleh kosong atau lebih dari 10 karakter!"
        );
        mulai();
    }
}

function tombol() {
    document.getElementById("tombWA").style.visibility = "visible";
    document.getElementById("tombWA").style.opacity = "1";
}

function expl() {
    document.getElementById("bodyblur").style.opacity = "1";
    document.getElementById("bodyblur").style.visibility = "visible";
    setTimeout(duar, 200);
}

function duar() {
    document.getElementById("fotoloveu").style.opacity = "1";
    document.getElementById("koteks").style.opacity = "1";
    setTimeout(tombol, 4000);
    setInterval(createHeart, 200);
    document.body.style.backgroundColor = "#000";
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = Math.random() * 90 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
}

setInterval(() => {
    var heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 100) {
        heartArr[0].remove();
    }
}, 100);

async function pilihwarna() {
    var { isConfirmed: warna } = await Swal.fire({
        title: "Oh iya, " + window.nama + " mau pilih warna apa nih?",
        text: "Ayo, jangan ragu-ragu 😆",
        showCancelButton: true,
        confirmButtonText: "Biru",
        cancelButtonText: "Merah",
        customClass: {
            confirmButton: 'btn-biru',
            cancelButton: 'btn-merah'
        }
    });

    if (warna) {
        await swals.fire(
            "Yeayy!",
            "Kalau pilih Biru berarti traktir aa ya hehe 🤣"
        );
        expl();
    } else {
        await swals.fire(
            "Yeayy!",
            "Kalau pilih Merah berarti traktirnya double ya sayangg 🤣"
        );
        expl();
    }
}

mulai();