
function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;

    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images= [];

    for(let i = 0; i<numOfDice; i++){
        const value = Math.floor(Math.random()*6)+1
        values.push(value);
        images.push(`<image src="imgs/dice${value}.jpg">`);
        
    }
 

    diceImages.innerHTML = images.join('');
}
