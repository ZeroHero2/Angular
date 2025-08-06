// ---- Funcion  ----

function addNumber (a:number,b:number){
    return a + b;
};

const resultado:number = addNumber(5,8)
console.log(resultado);

// ---- Funcion flecha ----

const addNumberArrow = (c:number,d:number):string => { 
    return  `${c + d}`;
}
const resultadoArrow:string = addNumberArrow(19,2);
console.log (resultadoArrow)

// ---- Funcion (valores por defecto y) ----
function multiply (firstNumber:number, secondNumber?:number, base:number=2){
    return firstNumber * base;
}
const multiplyResult = multiply(3)

console.log (multiplyResult)

// ---- Funcion en objeto ----
interface Character{
    name: string,
    hp: number,
    showHP: () => void;
}

const healCharacter = (character:Character, amount:number)=>{
    character.hp += amount;
}

const hero:Character = {
    name: 'batman',
    hp: 65,
    showHP()  {
        console.log (`La vida de ${this.name} es ${this.hp}`);
    }
}

hero.showHP();