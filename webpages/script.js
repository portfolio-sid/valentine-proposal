document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    yesButton.addEventListener("click", function () {
        window.location.href = "yes.html";
    });
    noButton.addEventListener("click", function () {
        for (let i = 0; i < 3; i++) { 
            const newYesButton = document.createElement("button");
            newYesButton.textContent = "Yes!";
            newYesButton.id= "yes";

            
            newYesButton.style.position = "absolute";
            newYesButton.style.left = Math.random() * 90 + "vw";
            newYesButton.style.top = Math.random() * 90 + "vh";

            newYesButton.addEventListener("click", function () {
                window.location.href = "yes.html";
            });
            document.body.appendChild(newYesButton);
        }
    });
});