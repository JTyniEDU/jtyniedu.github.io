// Array of titles to display
var titles = [
    "J",
    "JT",
    "JTy",
    "JTyn",
    "JTyni",
    "JTyniE",
    "JTyniED",
    "JTyniEDU",
    "JTyniEDU ",
    "JTyniEDU P",
    "JTyniEDU Pr",
    "JTyniEDU Pro",
    "JTyniEDU Proj",
    "JTyniEDU Proje",
    "JTyniEDU Projec",
    "JTyniEDU Project",
    "JTyniEDU Projects",
    "JTyniEDU Project",
    "JTyniEDU Projec",
    "JTyniEDU Proje",
    "JTyniEDU Proj",
    "JTyniEDU Pro",
    "JTyniEDU Pr",
    "JTyniEDU P",
    "JTyniEDU ",
    "JTyniEDU",
    "JTyniED",
    "JTyniE",
    "JTyni",
    "JTyn",
    "JTy",
    "JT",
    "J",
    ""
];

// Index to keep track of the current title
var index = 0;

// Function to change the document title
function changeTitle() {
    document.title = titles[index];
    index++;

    // Reset index if it exceeds the length of the titles array
    if (index >= titles.length) {
        index = 0;
    }
}

// Change title every 200 milliseconds (adjust as needed)
setInterval(changeTitle, 200);
