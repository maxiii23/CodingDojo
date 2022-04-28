function muestraListaDeCompras() {
  var produce = ["manzanas", "naranjas"];
  var frozen = ["brócoli", "helado"];
  frozen.push("croqueta de papa");
  console.log(frozen);
}
//Fragmento de código 1
function muestraInformaciónContacto() {
  var auntContactInfo = [
    "Paula",
    "Smith",
    "Calle Principal 1234",
    "St. Louis",
    "MO",
    12345,
  ];
  console.log(auntContactInfo);

  /*
    VALIABLES               DATOS

    auntContactInfo     =    ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    
    
    */
}
/*copy
Fragmento de código 2
*/
function muestraListaDeCompras() {
  var produce = ["manzanas", "naranjas"];
  var frozen = ["brócoli", "helado"];
  frozen.push("croqueta de papa");
  console.log(frozen);
}
/*
    VALIABLES               DATOS
    produce         =       ["manzanas", "naranjas"];
    frozen          =       ["brócoli", "helado"];


        =    ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    
    
    */

/*Fragmento de código 3
 */
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
/*
VALIABLES               DATOS
movieLibrary      =     ["Bambi", "E.T.", "Toy Story"];
*/

var msg1 = "hello";
var msg2 = "world!";
for (var num1 = 1; num1 <= msg1.length; num1++) {
  for (var num2 = 1; num2 <= msg2.length; num2++) {
    if (msg1.length == 4) {
      console.log(msg1 + " " + msg2);
    }
  }
  if (num1 != 4) {
    console.log(msg1.length + msg2.length);
  }
}
var msg1 = "hello";
var msg2 = "world!";
for (var num1 = 1; num1 <= msg1.length; num1++) {
  for (var num2 = 1; num2 <= msg2.length; num2++) {
    if (msg1.length == 4) {
      console.log(msg1 + " " + msg2);
    }
  }
  if (num1 != 4) {
    console.log(msg1.length + msg2.length);
  }
}