// Model
const house = [
    {
        code: "SM",name: "Smith"
    },
    {
        code: "JD",name: "Jordan"
    },
    {
        code: "BL",name: "Billy"
    }
]

const getFamily = houseCode => {
    switch(houseCode) {
        case "SM":
            return ["Mario","Karn","Klven"];
        case "JD":
            return ["Deen","Jasmen","Otto", "Bella"];
        case "BL":
            return ["Robert","Koren","Lulu"];
        default:
            return [];
    }
}

const createOptionElement = (text,value) => {
    const element = document.createElement("option")
    element.textContent = text;
    element.value = value;
    return element; 
}

const createLiElement = text => {
    const element = document.createElement("li")
    element.textContent = text;
    return element;
}

const houseElement = document.querySelector("select")

// Fill the list
house.forEach(house =>{
    houseElement.appendChild(createOptionElement(house.name,house.code))
})

// Controller - Brains
houseElement.addEventListener("change", e => {
    const fams = getFamily(e.target.value);
    const famsElement = document.getElementById("family")
    famsElement.innerHTML = "";
    fams.forEach(fam => {
        famsElement.appendChild(createLiElement(fam))
    })
})