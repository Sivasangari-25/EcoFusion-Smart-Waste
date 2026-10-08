/* =========================
   WASTE DATA
========================= */

let organicWaste = 65;
let plasticWaste = 42;

let totalWaste = 125;
let recycledWaste = 78;
let fertilizerWaste = 47;


/* =========================
   UPDATE DASHBOARD
========================= */

function updateDashboard() {

    // Organic
    document.getElementById("organicValue").textContent =
        organicWaste + "%";

    document.getElementById("organicProgress").style.width =
        organicWaste + "%";

    document.getElementById("organicKg").textContent =
        organicWaste + " kg";


    // Plastic
    document.getElementById("plasticValue").textContent =
        plasticWaste + "%";

    document.getElementById("plasticProgress").style.width =
        plasticWaste + "%";

    document.getElementById("plasticKg").textContent =
        plasticWaste + " kg";


    // Statistics
    document.getElementById("totalWaste").textContent =
        totalWaste;

    document.getElementById("recycledWaste").textContent =
        recycledWaste;

    document.getElementById("fertilizerWaste").textContent =
        fertilizerWaste;


    // Alert if bin is almost full
    if (organicWaste >= 90) {
        alert("⚠️ Organic waste bin is almost full!");
    }

    if (plasticWaste >= 90) {
        alert("⚠️ Plastic waste bin is almost full!");
    }
}


/* =========================
   ADD ORGANIC WASTE
========================= */

function addOrganicWaste() {

    if (organicWaste >= 100) {

        alert("Organic waste bin is full!");

        return;
    }

    organicWaste += 5;

    totalWaste += 5;

    fertilizerWaste += 5;

    updateDashboard();
}


/* =========================
   ADD PLASTIC WASTE
========================= */

function addPlasticWaste() {

    if (plasticWaste >= 100) {

        alert("Plastic waste bin is full!");

        return;
    }

    plasticWaste += 5;

    totalWaste += 5;

    recycledWaste += 5;

    updateDashboard();
}


/* =========================
   EMPTY BINS
========================= */

function emptyBins() {

    const confirmation =
        confirm("Are you sure you want to empty both bins?");

    if (!confirmation) {
        return;
    }

    organicWaste = 0;

    plasticWaste = 0;

    updateDashboard();

    alert("✅ Bins have been emptied successfully!");
}


/* =========================
   DARK MODE
========================= */

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");
    }

});


/* =========================
   REMEMBER THEME
========================= */

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";
}


/* =========================
   INITIAL DASHBOARD
========================= */

updateDashboard();