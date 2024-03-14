const showBtns = document.querySelectorAll(".show-teammember");
const closeBtns = document.querySelectorAll(".close-teammember");
const dialogs = document.querySelectorAll("dialog");

showBtns.forEach((showBtn, index) => {
    showBtn.addEventListener("click", () => {
        const dialog = dialogs[index];
        if (dialog) {
            dialog.showModal();
        }
    });
});

closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", () => {
        const dialog = dialogs[index];
        if (dialog) {
            dialog.close();
        }
    });
});

let randomImages = document.querySelectorAll(".random-image");

randomImages.forEach((randomImage) => {
    let imageSources = [
        "blue-gradient-team.svg",
        "pink-gradient-team.svg",
        "purple-gradient-team.svg",
        "yellow-gradient-team.svg",
        "green-gradient-team.svg",
    ];
    let newImage = imageSources[Math.floor(Math.random() * imageSources.length)];
    randomImage.src = "./assets/images/" + newImage;
});
