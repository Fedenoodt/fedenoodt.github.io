document.getElementById("paragraph").textContent = "Hello, World";

var element = document.createElement('p');
element.textContent = "Hello, World";
document.body.appendChild(element); //add the newly created element to the DOM


var foo = "bar";
console.log(foo);

var thisVar = 'first value';
var thatVar = 'second value';
console.log("thisVar:", thisVar, "and thatVar:", thatVar);

var greet = "Hello", who = "World";
console.log("%s, %s!", greet, who);

console.log({
 'Email': '',
 'Groups': {},
 'Id': 33,
 'IsHiddenInUI': false,
 'IsSiteAdmin': false,
 'LoginName': 'i:0#.w|virtualdomain\\user2',
 'PrincipalType': 1,
 'Title': 'user2'
});

 // ejecuta esta función cuando se cargue el documento
 window.onload = function() {

   // crea dinámicamente un par de elementos HTML en una página vacia
   var heading = document.createElement("h1");
   var heading_text = document.createTextNode("el texto que desee");
   heading.appendChild(heading_text);
   document.body.appendChild(heading);
}

console.log(document.body);

var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;
var ctx = canvas.getContext('2d');
ctx.font = '30px Cursive';
ctx.fillText("Hello world!", 50, 50);
document.body.appendChild(canvas);

var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;
var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';
text.textContent = 'Hello world!';
svg.appendChild(text);
document.body.appendChild(svg);

var img = new Image();
img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
document.body.appendChild(img);
