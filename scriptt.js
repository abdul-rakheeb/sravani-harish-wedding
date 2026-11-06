// Wedding Countdown Timer

const weddingDate = new Date("November 26, 2026 09:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
// Mobile Navigation Menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";
    });
});
// Open Wedding Invitation

const enterButton = document.getElementById("enterInvitation");
const invitationContent = document.getElementById("invitation-content");

enterButton.addEventListener("click", function () {

    invitationContent.classList.add("show-invitation");

    document.querySelector(".welcome-screen").style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// Gallery automatic scrolling
const galleryAuto = document.querySelector(".gallery-grid");

if (galleryAuto) {
    let photoIndex = 0;

    const startGalleryAutoScroll = () => {
        if (galleryAuto.dataset.autoStarted) return;
        galleryAuto.dataset.autoStarted = "true";

        setInterval(() => {
            photoIndex++;

            if (photoIndex >= galleryAuto.children.length) {
                photoIndex = 0;
            }

            const photo = galleryAuto.children[photoIndex];
            const gap = 12;

            galleryAuto.scrollTo({
                left: photo.offsetLeft - galleryAuto.offsetLeft,
                behavior: "smooth"
            });
        }, 2000);
    };

    document.getElementById("enterInvitation")
        ?.addEventListener("click", startGalleryAutoScroll);
}