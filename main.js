'use strict'
const coloredBoxForm = document.querySelector('#coloredBox')
coloredBoxForm.addEventListener('submit', getValues)


function getValues(e){
    e.preventDefault()
    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', reset)
    var c = document.getElementById("myBox");
    var ctx = c.getContext("2d");
    let color = document.querySelector('#color').value;
    let m = document.querySelector('#m').value;
    let n = document.querySelector('#n').value;
    ctx.beginPath()
    ctx.fillStyle = color;
    ctx.fillRect(50, 50, m, n);

    function reset(e){
        e.preventDefault();
        ctx.clearRect(50, 50, m, n)
    }
}
