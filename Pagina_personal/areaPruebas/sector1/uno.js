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

console.log(document.html);
