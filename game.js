function Dice() {
    return Math.floor(Math.random()*6) + 1;
}

var dice = document.getElementById('dice');
dice.addEventListener('click', function() {
    diceNum = Dice();
    document.getElementById('num').innerHTML=diceNum;
})