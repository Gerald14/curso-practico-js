//Codigo del cuadrado
console.group('Cuadrados')
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm")

const perimetroCuadrado = (lado) => lado * 4;
console.log("El perimetro del cuadrado es: "+perimetroCuadrado(ladoCuadrado)+"cm")

const areaCuadrado = (lado) => lado * lado;
console.log("El area del cuadrado es: "+areaCuadrado(ladoCuadrado)+"cm")
console.groupEnd();

//Codigo del Triangulo
console.group('Trinagulos')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + "cm, y "
    + baseTriangulo
    +"cm"
)
console.log("La altura del triangulo es de: "+alturaTriangulo+"cm")

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
console.log("El perimetro del triangulo es: "+perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo)+"cm")

const areaTriangulo = (base, altura) => base * altura / 2;
console.log("El area del trinagulo es: "+areaTriangulo(baseTriangulo,alturaTriangulo) +"cm")
console.groupEnd();

//Codigo del Circulo
console.group('Circulos')

const radioCirculo = 4;
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;

console.log("El radio del circulo es : "+radioCirculo+"cm")
console.log("El diamentro del circulo es : "+diametroCirculo(radioCirculo)+"cm")
console.log("El valor de PI es : "+PI)

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
console.log("El perimetro del circulo es: "+perimetroCirculo(radioCirculo)+"cm")

const areaCirculo = (radio) => radio * radio * PI ;
console.log("El area del circulo es: "+areaCirculo(radioCirculo)+"cm")
console.groupEnd();


//Botones
const btnPerimetroCuadrado = document.getElementById("btn-perimetro-cuadrado")
const btnAreaCuadrado = document.getElementById("btn-area-cuadrado")
const btnPerimetroTriangulo = document.getElementById("btn-perimetro-triangulo")
const btnAreaTriangulo = document.getElementById("btn-area-triangulo")
const btnPerimetroCirculo = document.getElementById("btn-perimetro-circulo")
const btnAreaCirculo = document.getElementById("btn-area-circulo")

//Resultados
const resultCuadrado = document.getElementById('result-cuadrado');
const resultTriangulo = document.getElementById('result-triangulo');


//Eventos
console.group('Eventos Cuadrado')
btnPerimetroCuadrado.addEventListener("click",
    () => {
        const inputLadoCuadrado = document.getElementById('InputCuadrado').value;
        const resultado = perimetroCuadrado(inputLadoCuadrado)
        let msgResult = `Perimetro: ${resultado}`;
        resultCuadrado.textContent = msgResult;
    }
)

btnAreaCuadrado.addEventListener("click",
    () => {
        const inputLadoCuadrado = document.getElementById('InputCuadrado').value;
        const resultado = areaCuadrado(inputLadoCuadrado)
        let msgResult = `Area: ${resultado}`;
        resultCuadrado.textContent = msgResult;
    }
)
console.groupEnd();

btnPerimetroTriangulo.addEventListener("click",
    () => {
        const inputLadoACuadrado = Number(document.getElementById('Input-ladoa-trinagulo').value);
        const inputLadoBCuadrado = Number(document.getElementById('Input-ladob-trinagulo').value);
        const inputBaseCuadrado = Number(document.getElementById('Input-base-trinagulo').value);
        const resultado = perimetroTriangulo(
            inputLadoACuadrado,
            inputLadoBCuadrado,
            inputBaseCuadrado)
        let msgResult = `Perimetro: ${resultado}`;
        resultTriangulo.textContent = msgResult;
    }
)

btnAreaTriangulo.addEventListener("click",
    () => {
        const inputBaseCuadrado = Number(document.getElementById('Input-base-trinagulo').value);
        const inputAlturaCuadrado = Number(document.getElementById('Input-altura-trinagulo').value);
        const resultado = areaTriangulo(inputBaseCuadrado,inputAlturaCuadrado)
        let msgResult = `Area: ${resultado}`;
        resultTriangulo.textContent = msgResult;
    }
)


btnPerimetroCirculo.addEventListener("click",
    () => {
        const inputLadoACuadrado = Number(document.getElementById('Input-ladoa-trinagulo').value);
        const inputLadoBCuadrado = Number(document.getElementById('Input-ladob-trinagulo').value);
        const inputBaseCuadrado = Number(document.getElementById('Input-base-trinagulo').value);
        const resultado = perimetroTriangulo(
            inputLadoACuadrado,
            inputLadoBCuadrado,
            inputBaseCuadrado)
        let msgResult = `Perimetro: ${resultado}`;
        resultTriangulo.textContent = msgResult;
    }
)

btnAreaCirculo.addEventListener("click",
    () => {
        const inputBaseCuadrado = Number(document.getElementById('Input-base-trinagulo').value);
        const inputAlturaCuadrado = Number(document.getElementById('Input-altura-trinagulo').value);
        const resultado = areaTriangulo(inputBaseCuadrado,inputAlturaCuadrado)
        let msgResult = `Area: ${resultado}`;
        resultTriangulo.textContent = msgResult;
    }
)

