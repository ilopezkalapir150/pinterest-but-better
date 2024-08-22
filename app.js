function loadLocalImages() {
    // need node js to make a server and loop thru all images if i want the number in the folder ugh
    // lets just use vue and learn it later
    for (let i = 0; i < 8; i++){
        let container = document.getElementById("pictures-container");
        let image = document.createElement("img");
        image.setAttribute("class", "medium-size");
        let name = "assets/img" + (i + 1) + ".png";
        image.setAttribute("src", name);
        console.log(name);
        container.appendChild(image);
    }
    
}