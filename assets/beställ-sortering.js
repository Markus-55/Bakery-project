const väljAlla = document.querySelector("#alla");
const väljTårtor = document.querySelector("#tårtor");
const väljBakelser = document.querySelector("#bakelser");
const väljBröd = document.querySelector("#bröd");


const visaAlla = () => {
    const tårtor = document.querySelectorAll(".tårta");
    const bakelser = document.querySelectorAll(".bakelse");
    const bröd = document.querySelectorAll(".bröd");

    tårtor.forEach(div => {
        div.style.display = "block";
    });

    bakelser.forEach(div => {
        div.style.display = "block";
    });

    bröd.forEach(div => {
        div.style.display = "block";
    });
};


const visaTårtor = () => {
    const tårtor = document.querySelectorAll(".tårta");
    const bakelser = document.querySelectorAll(".bakelse");
    const bröd = document.querySelectorAll(".bröd");

    tårtor.forEach(div => {
        div.style.display = "block";
    });

    bakelser.forEach(div => {
        div.style.display = "none";
    });

    bröd.forEach(div => {
        div.style.display = "none";
    });
};


const visaBakelser = () => {
    const tårtor = document.querySelectorAll(".tårta");
    const bakelser = document.querySelectorAll(".bakelse");
    const bröd = document.querySelectorAll(".bröd");

    tårtor.forEach(div => {
        div.style.display = "none";
    });

    bakelser.forEach(div => {
        div.style.display = "block";
    });

    bröd.forEach(div => {
        div.style.display = "none";
    });
};


const visaBröd = () => {
    const tårtor = document.querySelectorAll(".tårta");
    const bakelser = document.querySelectorAll(".bakelse");
    const bröd = document.querySelectorAll(".bröd");

    tårtor.forEach(div => {
        div.style.display = "none";
    });

    bakelser.forEach(div => {
        div.style.display = "none";
    });

    bröd.forEach(div => {
        div.style.display = "block";
    });
};


väljAlla.addEventListener("click", visaAlla);
väljTårtor.addEventListener("click", visaTårtor);
väljBakelser.addEventListener("click", visaBakelser);
väljBröd.addEventListener("click", visaBröd);