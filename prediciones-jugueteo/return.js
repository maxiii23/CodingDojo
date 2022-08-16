funcion  hola ( )  {
    consola _ log ( 'hola' ) ;
}
hola ( ) ;
consola _ registro ( 'Dojo' ) ;

/*
respuesta: hola dojo
*/

Fragmento 2 :
funcion  hola ( )  {
    consola _ log ( 'hola' ) ;
    devolver  15 ;
}
var  resultado  =  hola ( ) ;
consola _ log ( 'resultado es' ,  resultado ) ;

/*
respuesta: hola, el resultado es 15
*/

Fragmento 3 :
función  numPlus ( num )  {
    consola _ log ( 'num es' ,  num ) ;
    devuelve  num + 15 ;
}
var  resultado  =  numPlus ( 3 ) ;
consola _ log ( 'resultado es' ,  resultado ) ;

/*
respuesta: el num es 3, el resultado es 18
*/

Fragmento 4 :
var  núm  =  15 ;
consola _ registro ( num ) ;
función  logAndReturn ( num2 ) {
   consola _ registro ( num2 ) ;   
   devuelve  num2 ;
}
var  resultado  =  logAndReturn ( 10 ) ;
consola _ registro ( resultado ) ;
consola _ registro ( num ) ;

/*
respuesta: 15,10,10,15
*/

Fragmento 5 :
var  núm  =  15 ;
consola _ registro ( num ) ;
función  tiemposDos ( num2 ) {
   consola _ registro ( num2 ) ;   
   devuelve  num2 * 2 ;
}
var  resultado  =  vecesDos ( 10 ) ;
consola _ registro ( resultado ) ;
consola _ registro ( num ) ;

/*
respuesta: 15,10,20,15
*/

Fragmento 6 :
función  tiemposDosOtra Vez ( num )  {
    consola _ log ( 'num es' ,  num ) ;
    var  y  =  num * 2 ;
    devolver  y ;
}
var  resultado  =  dos veces otra vez ( 3 )  +  dos veces otra vez ( 5 ) ;
consola _ log ( 'resultado es' ,  resultado ) ;

/*
respuesta: num es 3, num es 5, num es 16
*/