let currentImage = 1;
const totalImages = 12;

const img = document.getElementById("galleryImage");
const counter = document.getElementById("galleryCounter");

document.querySelector(".next").onclick = () => changeImage(1);
document.querySelector(".prev").onclick = () => changeImage(-1);

function changeImage(dir) {
    currentImage += dir;
    if (currentImage > totalImages) currentImage = 1;
    if (currentImage < 1) currentImage = totalImages;
    img.src = `image${currentImage}.jpg`;
    counter.textContent = `${currentImage} / ${totalImages}`;
}

function copyDiscord() {
    navigator.clipboard.writeText("zlodeykapass");
    alert("Discord скопирован");
}

const inputs = document.querySelectorAll("select, input");

inputs.forEach(i => i.addEventListener("change", calculate));

function calculate() {
    let base = parseInt(document.getElementById("format").value);
    let bg = parseInt(document.getElementById("background").value);

    let total = base + bg;

    if (document.getElementById("extraCharacter").checked) {
        total += base;
    }

    total += parseInt(document.getElementById("extras").value) * 500;

    if (document.getElementById("heavyDetails").checked) {
        total *= 1.3;
    }

    if (document.getElementById("process").checked) total += 50;
    if (document.getElementById("nsfw").checked) total += 500;
    if (document.getElementById("deadline").checked) total += 500;

    if (document.getElementById("discount").checked) {
        total *= 0.8;
    }

    document.getElementById("totalPrice").textContent = Math.round(total);
}

calculate();
