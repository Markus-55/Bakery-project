const sortering = () => {
    const val = document.getElementById("sortera").value;
    const tårtor = document.querySelectorAll(".tårta");
    const bakelser = document.querySelectorAll(".bakelse");
    const bröd = document.querySelectorAll(".bröd");

    tårtor.forEach(div => {
        div.style.display = (val === "tårtor" || val === "alla") ? "block" : "none";
    });

    bakelser.forEach(div => {
        div.style.display = (val === "bakelser" || val === "alla") ? "block" : "none";
    });

    bröd.forEach(div => {
        div.style.display = (val === "bröd" || val === "alla") ? "block" : "none";
    });
};

document.getElementById("sortera").addEventListener("change", sortering);