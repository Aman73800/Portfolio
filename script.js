document.getElementById("reveal-fect").addEventListener("click", function() {
    var fect = document.getElementById("fect");
    if (fect.style.display === "none") {
        setTimeout(function() {
            fect.style.display = "block";
        }, 1000); // Delay of 1 second (1000 milliseconds)
    } else {
        fect.style.display = "none";
    }
});
