// // // let age = "17";

// // // if (age >= 18) {
// // //   console.log("Eres mayor de edad");
// // // } else {
// // //   console.log("Eres menor de edad");
// // // }
// // // // = es asignación
// // // // == es de comparación
// // // // === es de comparación + más etricto compara tipo de dato
// // // if(age == 17){
// // //     console.log("El numero es 17")
// // // }else{
// // //     console.log("el numero no es 17")
// // // }

// // let person = {
// //   age: 18,
// //   sonOfBoss: true,
// // };

// // if (person.age >= 18) {
// //   console.log("Eres mayor de edad");
// // } else if (person.sonOfBoss == true) {
// //   console.log("No eres mayor de edad pero eres el hijo del jefe");
// // } else {
// //   console.log("Eres menor de edad");
// // }

// let diaActual = new Date();
// const dia_de_la_semana = diaActual.getDay();
// switch (dia_de_la_semana) {
//   case 1:
//     console.log("Es Lunes");
//     break;
//   case 2:
//     console.log("Es Martes");
//     break;
//   case 3:
//     console.log("Es Miércoles");
//     break;
//   case 4:
//     console.log("Es Jueves");
//     break;
//   case 5:
//     console.log("Es viernes");
//     break;
//   case 6:
//   case 7:
//     console.log("Es fin de semana");
//     break;
//   default:
//     console.log("Ese día no existe");
// }

// let a = 1;

// a = a + 3;

// a += 3;
// a++;
// console.log(a);

// // const age = 17
// // // == 17 == "17" -> true
// // // ===17 === "17" -> false
// // // 17 +"17" -> "1717"
// // if (age !== 17) {
// //     console.log('Eres muy joven para beber alcohol')
// // }else{
// //     console.log('Eres mayor yaa')
// // }

// // let boolean = false
// // // && y
// // // || o
// // if(!boolean && age == 17){
// //     console.log("es verdadero")
// // }else{
// //     console.log("es falso")
// // }

// // const age = 17;

// // const firstName = "Sofía";

// // if (age <= 17 || firstName === "Iván")
// //   console.log("Eres menor de edad o te llamas " + firstName);

// // if (age <= 17 && firstName === "Iván")
// //   console.log("Eres menor de edad y te llamas " + firstName);

// // if (!firstName) console.log(firstName + " no está definido");

// // const eresMayorDeEdad = age >= 18 ? "Eres mayor de edad" : "No eres mayor de edad";

// // console.log(eresMayorDeEdad)
// const vueltas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < vueltas.length; i++) {
//        console.log('Vuelta nº ' + vueltas[i]);
// }

// let i = 0;

// while (i < vueltas.length) {
//   console.log("Vuelta nº " + vueltas[i]);
//   i++;
// }
// // const animales = ["perro", "cabra", "gato"];
// // for (let animal of animales) {
// //   console.log(animal);
// // }
// // console.log(animales[0])
// // console.log(animales[1])
// // console.log(animales[2])

// const person = { fname: "John", lname: "Doe", age: 25 };

// for (let x in person) {
//        console.log(person[x])
// }

// EJERCICIO 1
const obj = {
  a: {
    b: true,
    c: ["gato", 7],
  },
  d: 7,
  f: "gato",
};

if (typeof obj === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (typeof obj.a.b === "boolean") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (typeof obj.a.c[1] === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (typeof obj.d === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (obj.d > 4 && obj.d < 8) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (typeof obj.f === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (obj.f.length === 4) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

// Crea un array con la gente mayor de 25 años y muéstralo por consola. Utiliza el bucle for of.
let genteMayor25 = []
for (const person of gente) {
  if (person.edad > 25) {
    genteMayor25.push(person)
  }
}
console.log(genteMayor25)
// Crea un array con la gente que empieza por J. Utiliza el bucle for of y muéstralo por consola.

let genteEmpiezaConJ = []

for (const person of gente) {
    if(person.nombre[0]== "J"){
        genteEmpiezaConJ.push(person)
    }
}
console.log(genteEmpiezaConJ)
