let colors= ['purple','green','white','black','brown'];//variable  of color in array data type
let button= document.getElementById('button');//id of button
button.addEventListener('click', function () {// when button is clicked event will be trigered by addevent listner
  
    var randomColor = colors[Math.floor(Math.random() * colors.length)];//generates random number and rounds it  and assigned to color 
    let container = document.getElementById('container');//
    container.style.background = randomColor;//random color is generated
})