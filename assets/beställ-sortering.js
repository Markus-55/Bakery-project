const väljAlla = document.querySelector("#alla");
const väljTårtor = document.querySelector("#tårtor");
const väljBakelser = document.querySelector("#bakelser");
const väljBröd = document.querySelector("#bröd");

const tårtor = document.querySelectorAll(".tårta");
const bakelser = document.querySelectorAll(".bakelse");
const bröd = document.querySelectorAll(".bröd");

const sortering = (val) => {

    tårtor.forEach(div => {
        div.style.display = (val === "tårta" || val === "alla") ? "block" : "none";
    });

    bakelser.forEach(div => {
        div.style.display = (val === "bakelse" || val === "alla") ? "block" : "none";
    });

    bröd.forEach(div => {
        div.style.display = (val === "bröd" || val === "alla") ? "block" : "none";
    });
};

väljAlla.addEventListener("click", () => sortering("alla"));
väljTårtor.addEventListener("click", () => sortering("tårta"));
väljBakelser.addEventListener("click", () => sortering("bakelse"));
väljBröd.addEventListener("click", () => sortering("bröd"));