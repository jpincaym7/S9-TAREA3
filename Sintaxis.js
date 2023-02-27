//Clase Sintaxis, donde abarca cada uno de los ejercicios sin ciclo.
class sintaxis{
    variables(){
        //Inicialización de variables
        console.log("SUMA SI EL NUMERO ES MAYOR")
        let num1= 9,
        num2= 8
        let suma=0
        let ops="+"
        //Estructura Condicional, acción por verdadero
        if (num1>num2){
        suma=num1+num2
        console.log(num1,ops,num2,"=",suma)
        }
        else{
        console.log("Es menor", num1)
        }
    }
    operadores() {
        console.log("OPERACIONES MATEMATICAS")
        //Inicialización de variables
        let num1= 5,
        num2=5
        let suma=0, resta=0, multiplicacion=0, division=0, residuo=0
        let ops="+", opr="-", opm="*", opd="/", opresi="%"
        //asignando cada variable para la respectiva operación matematica
        suma=num1+num2
        resta=num1-num2
        multiplicacion=num1*num2
        division=num1/num2
        residuo=num1%num2
        //Presenta por pantalla
        console.log(num1,ops,num2,"=",suma)
        console.log(num1,opr,num2,"=",resta)
        console.log(num1,opm,num2,"=",multiplicacion)
        console.log(num1,opd,num2,"=",division)
        console.log(num1,opresi,num2,"=",residuo)
    }
    mayordedos(){
        //Inicialización de variables
        console.log("Mayor de Dos Numeros")
        let num1=6, num2=5
        //Estructura Condicional, acción por verdadero y falso. Presenta por pantalla una Respuesta 
        if (num1>num2)
        console.log("El mayor es:",num1)
        else (num1<num2)
        console.log("El menor es:", num2)
    }
    totaldeunacompra(){
        //Inicialización de variables
        console.log("EL TOTAL DE UNA COMPRA")
        let valor=50
        let iva=0.12
        let total=0
        //Asignando a la variable "Total" la formula
        total=valor+(valor*iva)
        //Presenta por pantalla
        console.log("El total es:", total)
    }
    presentarnombre(){
        console.log("PRESENTAR NOMBRE")
        //Inicialización de variable
        let nombre="Jordy"
        console.log("El nombre es:" + nombre);
        }
    nombreiguales(){
        //Inicializacion de variable
        console.log("Indicar si los nombres son Iguales")
        let nom="Jordy", nom2="David"
        //Estructura condicional, salida por verdadero y falso.
        if (nom === nom2){
        console.log(nom, 'y', nom2 ,'son iguales')
        } else{
        console.log( nom, 'y' , nom2, 'no son iguales')
        }
    }
    vueltodecompra(){
        //inicializacion de variable
        let costo=80
        let pago=120
        //Estructura condicional, salida por verdadero
        if (pago>=costo){
            pago=pago-costo
        }
        console.log("El vuelto a dar es de:", "$",pago, "Dolares")
    }
}
let sin1= new sintaxis()
//sin1.variables()
//sin1.operadores()
//sin1.mayordedos()
//sin1.totaldeunacompra()
//sin1.presentarnombre()
//sin1.nombreiguales()
//sin1.vueltodecompra()


//Clase conciclos, donde abarca cada uno de los ejercicios con ciclo.
class conciclos{
    nombre5veces(){
        console.log("Presentar nombre 5 Veces")
        for(let c=0; c<5; c++){
        console.log("Jordy");
        }
    }
    multiplosde3(){
        console.log("Multiplos de 3 del 3 al 21")
        let num=3
        while (num<21){
            if (num%3==0){
                console.log (num)
            }
            num++;
        }
    }
    multiplosdel21(){
        console.log("Multiplos de 3 del 21 al 3")
        let num=21
        while (num>3){
            if (num%3==0){
                console.log (num)
            }
            num--;
        }
    }
    arreglodieznumeros(){
        let numeros=[15, 20, 390, 3, 6, 48, 5.9874, 9, 123456, 7]
        let longitud=numeros.length, c=0
        console.log(numeros,numeros[0],numeros[longitud-1])
        while(c<longitud){
            if (numeros[c].length<5) {
            console.log(numeros[c])
            }
        c=c+1
        }
    }
    arrCaracteresMenos5(){
        console.log("Elementos De Un Arreglo Que Tengan Menos De 5 Caracteres")
        let arreglo=["435656","345434","12","123456","12","2","12","1","9","434355"]
        //               0        1     2     3       4    5   6    7   8    9       
        console.log(arreglo)
        for(let pos=0;pos<10;pos=pos+1){
          if (arreglo[pos].length < 5  ){ 
           console.log(`pos->${pos} Elemento:${arreglo[pos]}` )
          }
        }
    }
    presentararreglo(){
        let arreglo=["Hola, mundo",25,16]
        let c=0;
        console.log("Arreglo:", arreglo )
       for(c=0; c<arreglo.length; c++){
        console.log(arreglo[c]);
       }
    }
    sumadeimpares(){
    let numeros=[3,6,9,13,15,18,19,20,21,22,23,24,25,26,27]
    let longitud=numeros.length, c=0, s=0
    console.log("PRESENTAR LOS NUMEROS IMPARES Y SUMAR")
    console.log(numeros)
    while (c<longitud){
        if (numeros[c]%2!==0){
            console.log(numeros[c])
            s=numeros[c]+s
        }
        c=c+1
        }
        console.log("La suma de los numeros impares es:", s)
    }
    presentararreglo(){
        let Numeros=[10,50,25,5,63]
        let c=0;
        let primero= Numeros[0]
        let segundo= Numeros[(Numeros.length-1)/2]
        let tercero= Numeros[Numeros.length-1]
        for (c==0; c<Numeros.length; c++){
            if(c===0){
                console.log("El primero es:", primero)
            } else if (c===(Numeros.length-1)/2){
                console.log("El segundo es:", segundo)
            } else if (c===Numeros.length-1){
                console.log("El tercero es:", tercero)
            }
        }
    }
    multiplicacionciclos(){
        console.log("Multiplicación con Ciclos")
        let num=5, c=1
        for(c=1; c<=12; c++){
            let multi=num*c
            console.log(num,"X",c,"=",multi)
        }
    }
    multiplicaionsucesiva(){
        console.log("MULTIPLICACIÓN SUCESIVA")
        let num1=5, num2=4, c=1, sum=0
        for(c=1; c<=num2; c++){
        sum=num1+sum
        console.log(num1, "+", num1, "=", sum)
        }
        console.log("La multiplicación de", num1, "X", num2, "Es:", sum)
    }
    restasucesiva(){
        console.log("DIVISIÓN POR RESTA SUCESIVA")
        let num1=5, num2=2, c=1, res=0
        res=num1
        while(res-num2>=0){
        c=c+1
        res=res-num2
        console.log(num1, "-", num2, "=", res)
        }
        console.log("La Resta Sucesiva de", num1, "-", num2, "Es:", c)
    }
    factorialnumero(){
        //ejemplo: n=4, respuesta=4*3*2*1=24
        let num1=4, s=1
        for (let c=num1; c>0; c--){
        s=s*=c
        console.log(c,"=",s)
        }
        console.log("El factorial de", num1, "es:",s)
    }
    exponentenumeros(){
        //ejemplo: num=4  exp=3, respuesta=4*4*4=64
        let num=4, c=1, exponente=3, resultado=1
        while(c<=exponente){
            resultado=resultado*num
            c=c+1
        }
        console.log ("El resultado es:", resultado)
    }
    fibonacci(){
        let a=0,b=1,c=1,cont=3,n=8, x
        //n= Math.floor(Math.random()*10)
        console.log(x)
        console.log(a,b,c)
        while (cont < n){
            a=b;b=c;c = a+b
            console.log(c)
            cont=cont +1
        }
    }
    invetirNumero(){
        // Definicion de variables
        let num = 123;
        let invertido = parseInt(num.toString().split('').reverse().join(''));
        // Presentacion del numero invertido
        console.log(`El numero invertido de ${num} es: ${invertido}`);
    }
    divisores(){
        let num=8,divisor=1, r, ac
        while(divisor<num){
        r=num%divisor
        if(r==0){
        ac=ac+divisor
        console.log(`El numero ${num} y sus divisores son: ${divisor}`) 
        }
        divisor=divisor+1       
        }
    }
    numeroperfecto(){
        let numero=6, suma=0, i=0;
        // Presentacion de si el numero es perfecto o no
        for ( i = 1; i <= numero / 2; i++ ){
            if ( numero % i === 0 ){
                suma = suma + i
            }
        }

        if ( suma === numero && numero ){
            console.log(`El numero ${numero} SI es perfecto`);
    }
    
    }
    numerosprimos(){
        let numero =5, i=0 , primo=true

        // Bucle para saber si es numero es divisible en rango 2 
        for ( i = 2; i < numero; i++){
            if ( numero % i === 0 ){
                primo = false;
            }
        }

        // Presentacion del numero de si es primo o no
        if ( primo ){
            console.log(`El numero ${numero} es primo`);
        }
    } 
}
let conci1= new conciclos()
//conci1.nombre5veces()
//conci1.multiplosde3()
//conci1.multiplosdel21()
//conci1.arreglodieznumeros()
//conci1.arrCaracteresMenos5()
//conci1.menoresde10()
//conci1.presentararreglo()
//conci1.sumadeimpares()
//conci1.presentararreglo()
//conci1.multiplicacionciclos()
//conci1.multiplicaionsucesiva()
//conci1.restasucesiva()
//conci1.factorialnumero()
//conci1.exponentenumeros()
//conci1.fibonacci()
//conci1.invetirNumero()
//conci1.divisores()
//conci1.numeroperfecto()
//conci1.numerosprimos()
