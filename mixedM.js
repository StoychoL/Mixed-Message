const Menue = {
    startersMenue: ["Salad", "Calamari", "Soup", "Messy Fries"],
    mainsMenue: ["Beef Steak", "Pork Steak", "Chicken Breast", "Turkey"],
    desertsMenue: ["Cacke", "Tiramisu", "Cheese Cacke", "Browney"]
}    


const getMessage = () => {
    let startersM = Menue.startersMenue[Math.floor(Math.random()* Menue.startersMenue.length)];
    let mainsM = Menue.mainsMenue[Math.floor(Math.random()* Menue.mainsMenue.length)];
    let desertsM = Menue.desertsMenue[Math.floor(Math.random()* Menue.desertsMenue.length)];

    let message = `
    =====================CHALLENGE=====================
    Welcome to SL resturant. Our best starter today is ${startersM}. 
    For main we would recommend ${mainsM}.
    Our ${desertsM} is the best desert in the town .
    Enjoy your Food!`;
    console.log(message)
}

getMessage(); 

