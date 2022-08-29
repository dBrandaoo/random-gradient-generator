function getGradient() {
    let hexChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let firstColor = []
    let secondColor = []

    let direction

    let select = document.getElementById('gradientDirection');
    let value = select.options[select.selectedIndex].value;
    

    for (let i = 0; i < 6; i++) {
        firstColor.push(hexChars[Math.floor(Math.random() * hexChars.length)])
        secondColor.push(hexChars[Math.floor(Math.random() * hexChars.length)])
    }

    let c1 = "#" + firstColor.join("")
    let c2 = "#" + secondColor.join("")
    
    if (value == "horizontal") {
        direction = "right"
    }
    if (value == "vertical") {
        direction = "bottom"
    }
    
    document.body.style.background = `linear-gradient(to ${direction}, ${c1}, ${c2})`
    document.querySelector("#direction").textContent = direction
    document.querySelector("#color1").textContent = c1
    document.querySelector("#color2").textContent = c2
}